import { call, put, takeEvery, all } from 'redux-saga/effects'
import Lodash from 'lodash';
import Web3 from 'web3';
import BN from 'bn.js';
import { Decimal } from 'decimal.js';
import store from '../store/reduxStore';
import * as Constants from '../constants/constants';
import { config, filterMarkets, contractList } from '../utilities/config';
import {divideBigNumbers, multiplyBigNumbers, convertPriceArray, convertVolumeArray, transformToTokenName, convertQtyEach, convertPriceEach} from '../utilities/helpers.js';


let data = [];
const coinList = config.base.concat(config.trades);
coinList.forEach((obj, i) => {
  data.push({
    product: obj.productName,
    prCode: obj.productId,
    tokenAddress: obj.tokenAddress,
    decimal: obj.decimal
  });
  if (i === 0) {
    if (obj.prTrade && obj.prTrade.length > 0) {
      obj.prTrade.forEach(o => {
        data.push({
          product: o.productName,
          prCode: o.productId,
          tokenAddress: o.tokenAddress,
          decimal: o.decimal
        });
      })
    }
  }
});

function* getMyAccountId() {

    const { GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const id = yield GlobalSmartContractObject.methods.GetMyAccountId().call({
        from: selectedAddress
    });

    yield put({ type: Constants.default.Success.GET_MY_ACCOUNTID_SUCCESS, accountId: id });
}

function* getOrderBook(params) {
    const { GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const { prTrade, prBase, numOfOrdersToFetch = 10 } = params.payload;
    const res = yield call(GlobalSmartContractObject.methods.GetHoga, prTrade, prBase, numOfOrdersToFetch)
    const orderBook = yield call(res.call, {
        from: selectedAddress
    })

    const tradeDecimal = transformToTokenName(prTrade).decimal; // coinList.find(coin => coin.productId === prTrade).decimal;
    yield put({
        type: Constants.default.Success.GET_ORDERBOOK_SUCCESS, orderbook: {
            priceA:  convertPriceArray(orderBook.priceA),
            priceB:  convertPriceArray(orderBook.priceB),
            volumeA: convertVolumeArray(orderBook.volumeA, tradeDecimal),
            volumeB: convertVolumeArray(orderBook.volumeB, tradeDecimal)
        }
    });
}

function* getMyOrders() {
    const { GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;

    const res = yield call(GlobalSmartContractObject.methods.GetMyOrders)
    const myOrders = yield call(res.call, {
        from: selectedAddress
    })
    console.log("sandeep -->", myOrders);
    //const tradeDecimal = coinList.find(coin => coin.productId === myOrders.prTrade).decimal;
    let result = [];
    myOrders.orderId.forEach((obj, i) => {
      let token = transformToTokenName(+myOrders.prTrade[i]);
      //console.log("getMyorders", token, myOrders.prTrade[i], transformToTokenName(myOrders.prTrade[i]));
      result.push({
      orderID: obj,
      instrumentPair: transformToTokenName(myOrders.prTrade[i]).productName + '/'+ transformToTokenName(myOrders.prBase[i]).productName,
      prices: convertPriceEach(myOrders.prices[i]),
      qtys: convertQtyEach(myOrders.qtys[i], transformToTokenName(myOrders.prTrade[i]).decimal),
      sells: myOrders.sells[i] });
    });
    console.log(result);

    yield put({ type: Constants.default.Success.GET_MY_ORDERS_SUCCESS, myOrders: result });
}

function* getBestBidBestAsk(params) {
    const {trade, base} = params.payload;
    trade.forEach( (o, i) => {
        if(i < (trade.length -1) )
            base.push(base[0]);
    })
    const { GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const bestBidBestAsk = yield GlobalSmartContractObject.methods.getOrderBookInfo(trade, base).call({
        from: selectedAddress
    });
    yield put({ type: Constants.default.Success.GET_BESTBID_BESTASK_SUCCESS, bestBidBestAsk });
}

function* placeBuyOrder(params) {
    const { GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const { price, amount, base, trade } = params.payload;
    const isSell = false;
    const ownerId = config.ownerId; // get the ownerId from the config
    const basePrice = config.basePrice;

    const tradeDecimal = coinList.find(coin => coin.productId === trade).decimal;

    //let calculated_price = new Decimal(price).mul( new Decimal(basePrice) );
    let BN_Price = multiplyBigNumbers(price, basePrice);  //new BN(calculated_price.toString(10));

  //  let calculated_amount = new Decimal(amount).mul( new Decimal(tradeDecimal) );
    let BN_Amount = multiplyBigNumbers(amount, tradeDecimal);//new BN(calculated_amount.toString(10));


    const orderHash = GlobalSmartContractObject.methods.LimitOrder(ownerId, trade, base, isSell, BN_Price, BN_Amount).send({
        from: selectedAddress
    });
    yield put({ type: Constants.default.Success.PLACE_BUY_ORDER_SUCCESS, buyOrderStatus: orderHash });
    // .on('transactionHash', (hash) => {
    //     console.log("Transaction Hash ==> ", hash);
    //     // yield put({type: Constants.default.Success.PLACE_BUY_ORDER_SUCCESS, orderStatus: hash});
    // })
    // .on('confirmation', (confirmationNumber, receipt) => {
    //     console.log("Confirmatin Number ==> ", confirmationNumber);
    //     console.log("Receipt ==> ", receipt);
    // })
    // .on('receipt', (receipt) => {
    //     console.log("Receipt ==> ", receipt);
    // })
    // .on('error', (error) => {
    //     console.log("Error ==> ", error);
    // })
}

function* placeSellOrder(params) {
    const { GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const { price, amount, base, trade } = params.payload;
    const isSell = true;
    const ownerId = config.ownerId; // get the ownerId from the config
    const basePrice = config.basePrice;

    const tradeDecimal = coinList.find(coin => coin.productId === trade).decimal;

    // let calculated_price = new Decimal(price).mul( new Decimal(basePrice) );
    // let BN_Price = new BN(calculated_price.toString(10));
    let BN_Price = multiplyBigNumbers(price, basePrice);

    //let calculated_amount = new Decimal(amount).mul( new Decimal(tradeDecimal.decimal) );
    let BN_Amount =  multiplyBigNumbers(amount, tradeDecimal);//new BN(calculated_amount.toString(10));


    const orderHash = GlobalSmartContractObject.methods.LimitOrder(ownerId, trade, base, isSell, BN_Price, BN_Amount).send({
        from: selectedAddress
    });
    yield put({ type: Constants.default.Success.PLACE_SELL_ORDER_SUCCESS, sellOrderStatus: orderHash });
}

function* getBalance(params) {
    const { GlobalWeb3Object, GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    let prCodesArray = [];
    let tokens = [];
    for (let c of data) {
        if (+c.prCode){
            prCodesArray.push(+c.prCode);
        }
        tokens.push({ name: c.product, address: c.tokenAddress, decimal: c.decimal });
    }

    let productArray = Lodash.uniq(prCodesArray);
    const res = yield call(GlobalSmartContractObject.methods.getBalance, productArray)
    const balance = yield call(res.call, {
       from: selectedAddress
    });
    let _result = [];
    balance.available.forEach((obj, index) => {
        _result.push({
            name: tokens[index].name,
            hold:  divideBigNumbers(balance.reserved[index], tokens[index].decimal),
            total: divideBigNumbers(obj.toString(), tokens[index].decimal),
            tokenAddress: tokens[index].address
        });
    });
    yield put({ type: Constants.default.Success.GET_BALANCE_SUCCESS, balance: _result });
}

function* depositEthRequest(params) {
    const { GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const { amount } = params.payload;
    const deposit = GlobalSmartContractObject.methods.depositETH().send({
        from: selectedAddress,
        value: Web3.utils.toWei(amount, 'ether')
    });
    yield put({ type: Constants.default.Success.DEPOSIT_ETH_SUCCESS, depositedEth: deposit });
}

function* withdrawEthRequest(params) {
    const { GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const { amount } = params.payload;
    const withdrawAmount = GlobalSmartContractObject.methods.withdrawETH(Web3.utils.toWei(amount, 'ether')).send({
        from: selectedAddress
    });
    yield put({ type: Constants.default.Success.WITHDRAW_ETH_SUCCESS, withdrawnAmount: withdrawAmount });
}

function* depositTokenRequest(params) {
    const { GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const { prAddress, amount } = params.payload;
    const config = coinList.find(coin => coin.tokenAddress === prAddress);
    let BN_Amount = multiplyBigNumbers(amount.toString(), config.decimal)
    const deposit = GlobalSmartContractObject.methods.depositWithdrawToken(prAddress, BN_Amount, true).send({
        from: selectedAddress
    });
    yield put({ type: Constants.default.Success.DEPOSIT_TOKEN_SUCCESS, depositedToken: deposit });
}

function* withdrawTokenRequest(params) {
    const { GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const { prAddress, amount } = params.payload;
    const config = coinList.find(coin => coin.tokenAddress === prAddress);
    let BN_Amount = multiplyBigNumbers(amount.toString(), config.decimal)
    const withdrawAmount = GlobalSmartContractObject.methods.depositWithdrawToken(prAddress, BN_Amount, false).send({
        from: selectedAddress
    });
    yield put({ type: Constants.default.Success.WITHDRAW_TOKEN_SUCCESS, withdrawnAmount: withdrawAmount });
}

function* actionWatcher() {
    yield takeEvery(Constants.default.Requests.PLACE_BUY_ORDER_REQUEST, placeBuyOrder)
    yield takeEvery(Constants.default.Requests.PLACE_SELL_ORDER_REQUEST, placeSellOrder)

    yield takeEvery(Constants.default.Requests.GET_ORDERBOOK_REQUEST, getOrderBook)
    yield takeEvery(Constants.default.Requests.GET_MY_ORDERS_REQUEST, getMyOrders)

    yield takeEvery(Constants.default.Requests.DEPOSIT_ETH_REQUEST, depositEthRequest)
    yield takeEvery(Constants.default.Requests.WITHDRAW_ETH_REQUEST, withdrawEthRequest)

    yield takeEvery(Constants.default.Requests.DEPOSIT_TOKEN_REQUEST, depositTokenRequest)
    yield takeEvery(Constants.default.Requests.WITHDRAW_TOKEN_REQUEST, withdrawTokenRequest)

    yield takeEvery(Constants.default.Requests.GET_BALANCE_REQUEST, getBalance)
    yield takeEvery(Constants.default.Requests.GET_MY_ACCOUNTID_REQUEST, getMyAccountId)

    yield takeEvery(Constants.default.Requests.GET_BESTBID_BESTASK_REQUEST, getBestBidBestAsk)

}

export default function* smartContractSaga() {
    yield all([
        actionWatcher()
    ]);
}
