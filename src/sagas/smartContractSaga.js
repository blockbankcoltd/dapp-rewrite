import { call, put, takeEvery, takeLatest, all, fork, spawn } from 'redux-saga/effects'
import Lodash from 'lodash';
import Web3 from 'web3';
import BN from 'bn.js';
import { Decimal } from 'decimal.js';
import store from '../store/reduxStore';
import * as Constants from '../constants/constants';
import { config, filterMarkets, contractList } from '../utilities/config';

// import Bignumber from 'bignumber';
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


function createSmartContract() {
    const selectedContract = contractList[(+localStorage.getItem('contract') || 0)];

    const contract_address = selectedContract.address;
    const { GlobalWeb3Object } = store.getState().main;


    const Contract = new GlobalWeb3Object.eth.Contract(selectedContract.abifile.abi, contract_address);
    return Contract;
}

// function* generateSmartContractObject() {
//     const selectedContract = contractList[(+localStorage.getItem('contract') || 0)];
//     const contract_address = selectedContract.address;
//     const { GlobalWeb3Object } = store.getState().main;
//     const Contract = new GlobalWeb3Object.eth.Contract(selectedContract.abifile.abi, contract_address);
//     yield put({type: Constants.default.Success.SMARTCONTRACT_OBJECT_SUCCESS, GlobalSmartContractObject: Contract});
// }

function sendAmount(amount, decimal) {
    const BNAmount = Web3.utils.toWei(amount, 'ether');
    // const BNAmount = Web3.utils.toBN(+amount * Math.pow(10,decimal));
    // console.log(+BNAmount, BNAmount)

    // const Big = new Bignumber(amount);
    // console.log(Big)
    // const bigAmount = Big.multipliedBy(Math.pow(10,18));
    // console.log(bigAmount)
    console.log(BNAmount)
    return BNAmount;
}

function recieveAmount(amount, decimal) {
    return amount / Math.pow(10, decimal)
}

// ( async () => {
//     const selectedContract = contractList[(+localStorage.getItem('contract') || 0)];

//     const contract_address = selectedContract.address;
//     const { GlobalWeb3Object } = store.getState().main;
//     const Contract = new GlobalWeb3Object.eth.Contract(selectedContract.abifile.abi, contract_address);
//     const id = await Contract.methods.GetMyAccountId().call({
//         from: Contract.givenProvider.selectedAddress
//     });
//     console.log(" ID FROM ASYNC IIFE -------------------------------------------------------------------------- ", id);
// })();

function* getMyAccountId() {
//     const { GlobalWeb3Object, GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    // const method = yield call(Contract.methods.GetMyAccountId);
    // const accountId = yield call(method.call({
    //     from: Contract.givenProvider.selectedAddress
    // }));

    // const id = yield Contract.methods.GetMyAccountId().call({
    //     from: "0xEcE27B8E018Fd5b5A52621cfa1e0e1a399874dA2"
    // });
    console.log("STATE IN SC SAGA ----> ", store.getState());
    const { GlobalWeb3Object, GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    console.log(selectedAddress);
    const id = yield GlobalSmartContractObject.methods.GetMyAccountId().call({
        // from: "0xEcE27B8E018Fd5b5A52621cfa1e0e1a399874dA2"
        from: selectedAddress
    });
    console.log("****************++++++++++++++++++++++++++++++++++++++++++++++++++=")
    console.log("SEE HERE ---------------- ", id)
    console.log("****************++++++++++++++++++++++++++++++++++++++++++++++++++=")
    return yield put({ type: Constants.default.Success.GET_MY_ACCOUNTID_SUCCESS, accountId: id });
    // return id;
}

function* getOrderBook(params) {
    const { GlobalWeb3Object, GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const { prTrade, prBase, numOfOrdersToFetch = 10 } = params.payload;
    const res = yield call(GlobalSmartContractObject.methods.GetHoga, prTrade, prBase, numOfOrdersToFetch)
    const orderBook = yield call(res.call, {
        from: selectedAddress
    })
    console.log("Order book --> ", orderBook);
    const convertPrice = (arr) => {
        return arr.map( obj => {
          return new Decimal(obj).div(new Decimal(config.basePrice)).toString(10)
        })
    }

    const convertVolume = (arr, trade) => {
        const tradeDecimal = coinList.find(coin => coin.productId === trade).decimal;
        return arr.map( obj => {
          return new Decimal(obj).div(new Decimal(tradeDecimal)).toString(10)
        })
    }

    yield put({
        type: Constants.default.Success.GET_ORDERBOOK_SUCCESS, orderbook: {
            priceA:  convertPrice(orderBook.priceA),
            priceB:  convertPrice(orderBook.priceB),
            volumeA: convertVolume(orderBook.volumeA, prTrade),
            volumeB: convertVolume(orderBook.volumeB, prTrade)
        }
    });
}

function* getMyOrders() {
    const { GlobalWeb3Object, GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;

    const res = yield call(GlobalSmartContractObject.methods.GetMyOrders)
    const myOrders = yield call(res.call, {
        from: selectedAddress
    })
    // const myOrders = yield Contract.methods.GetMyOrders().call({
    //     from: Contract.givenProvider.selectedAddress
    // })
    yield put({ type: Constants.default.Success.GET_MY_ORDERS_SUCCESS, myOrders });
    return myOrders;
}

function* getBestBidBestAsk(params) {
    const {trade, base} = params.payload;
    trade.forEach( (o, i) => {
        if(i < (trade.length -1) )
            base.push(base[0]);
    })
    console.log(base, trade);
    const { GlobalWeb3Object, GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const bestBidBestAsk = yield GlobalSmartContractObject.methods.getOrderBookInfo(trade, base).call({
        from: selectedAddress
    });
    yield put({ type: Constants.default.Success.GET_BESTBID_BESTASK_SUCCESS, bestBidBestAsk });
}

function* placeBuyOrder(params) {
    const { GlobalWeb3Object, GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const { price, amount, base, trade } = params.payload;
    const isSell = false;
    const ownerId = config.ownerId; // get the ownerId from the config
    const basePrice = config.basePrice;

    const tradeDecimal = coinList.find(coin => coin.productId === trade).decimal;
    //const baseDecimal = coinList.find(coin => coin.productId === base).decimal;

    let calculated_price = new Decimal(price).mul( new Decimal(basePrice) );
    let BN_Price = new BN(calculated_price.toString(10));

    let calculated_amount = new Decimal(amount).mul( new Decimal(tradeDecimal) );
    let BN_Amount = new BN(calculated_amount.toString(10));


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
    const { GlobalWeb3Object, GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const { price, amount, base, trade } = params.payload;
    const isSell = true;
    const ownerId = config.ownerId; // get the ownerId from the config
    const basePrice = config.basePrice;

    const tradeDecimal = coinList.find(coin => coin.productId === trade);
    //const baseDecimal = coinList.find(coin => coin.productId === base);

    let calculated_price = new Decimal(price).mul( new Decimal(basePrice) );
    let BN_Price = new BN(calculated_price.toString(10));

    let calculated_amount = new Decimal(amount).mul( new Decimal(tradeDecimal.decimal) );
    let BN_Amount = new BN(calculated_amount.toString(10));


    const orderHash = GlobalSmartContractObject.methods.LimitOrder(ownerId, trade, base, isSell, BN_Price, BN_Amount).send({
        from: selectedAddress
    });
    yield put({ type: Constants.default.Success.PLACE_SELL_ORDER_SUCCESS, sellOrderStatus: orderHash });
}

function* getBalance(params) {
    // const { id } = params.payload;
    const { GlobalWeb3Object, GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    let prCodesArray = [];
    let tokens = [];
    for (let c of data) {
        if (+c.prCode){
            prCodesArray.push(+c.prCode);
        }
        tokens.push({ name: c.product, address: c.tokenAddress, decimal: c.decimal });
        // let x = yield c;
    }

    //  const fetchAccountBalancePromise = (accountId, prCodesArray) => {
    //     return new Promise((resolve, reject) => {
    //         Contract.methods.getBalance(prCodesArray).call({
    //             from: Contract.givenProvider.selectedAddress
    //         }).then(data => resolve(data)).catch(err => reject(err));
    //     })
    // }
    //
    // let productArray = Lodash.uniq(prCodesArray)
    // const balance = yield call(fetchAccountBalancePromise, productArray)

    let productArray = Lodash.uniq(prCodesArray);
    const res = yield call(GlobalSmartContractObject.methods.getBalance, productArray)
    const balance = yield call(res.call, {
       from: selectedAddress
     });
     console.log("balance from SC", balance);
    let _result = [];
    balance.available.forEach((obj, index) => {
        //let dec = Math.pow(tokens[index].decimal);
        let n = new Decimal(obj.toString());
        let h = new Decimal (balance.reserved[index]);
        let d = new Decimal(tokens[index].decimal);
        _result.push({
            name: tokens[index].name,
            hold: h.dividedBy(d).toString(10),
            total: n.dividedBy(d).toString(10),
            tokenAddress: tokens[index].address
        });
    });
    yield put({ type: Constants.default.Success.GET_BALANCE_SUCCESS, balance: _result });
}

function* depositEthRequest(params) {
    const { GlobalWeb3Object, GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const { amount } = params.payload;
    const deposit = GlobalSmartContractObject.methods.depositETH().send({
        from: selectedAddress,
        value: sendAmount(amount, 18)
    });
    yield put({ type: Constants.default.Success.DEPOSIT_ETH_SUCCESS, depositedEth: deposit });
}

function* withdrawEthRequest(params) {
    const { GlobalWeb3Object, GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const { amount } = params.payload;
    const withdrawAmount = GlobalSmartContractObject.methods.withdrawETH(Web3.utils.toWei(amount, 'ether')).send({
        from: selectedAddress
    });
    yield put({ type: Constants.default.Success.WITHDRAW_ETH_SUCCESS, withdrawnAmount: withdrawAmount });
}

function* depositTokenRequest(params) {
    const { GlobalWeb3Object, GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const { prAddress, amount } = params.payload;
    const config = coinList.find(coin => coin.tokenAddress === prAddress);
    let num = new Decimal(amount.toString()).mul( new Decimal(config.decimal) );
    let BN_Amount = new BN(num.toString(10));
    const deposit = GlobalSmartContractObject.methods.depositWithdrawToken(prAddress, BN_Amount, true).send({
        from: selectedAddress
    });
    yield put({ type: Constants.default.Success.DEPOSIT_TOKEN_SUCCESS, depositedToken: deposit });
}

function* withdrawTokenRequest(params) {
    const { GlobalWeb3Object, GlobalSmartContractObject, selectedAddress } = store.getState().smartContract;
    const { prAddress, amount } = params.payload;
    const config = coinList.find(coin => coin.tokenAddress === prAddress);
    let num = new Decimal(amount.toString()).mul( new Decimal(config.decimal) );
    let BN_Amount = new BN(num.toString(10));
    const withdrawAmount = GlobalSmartContractObject.methods.depositWithdrawToken(prAddress, BN_Amount, false).send({
        from: selectedAddress
    });
    yield put({ type: Constants.default.Success.WITHDRAW_TOKEN_SUCCESS, withdrawnAmount: withdrawAmount });
}

function* actionWatcher() {
    // yield takeLatest(Constants.default.Requests.SMARTCONTRACT_OBJECT_REQUEST, generateSmartContractObject)
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
