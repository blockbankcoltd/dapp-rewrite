import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import store from '../store/reduxStore';
import * as contractJson from '../utilities/DEXHIGH2.json';
import * as Constants from '../constants/constants';
import {config, filterMarkets, contractList} from '../utilities/config';
import Lodash from 'lodash';
import Web3 from 'web3';
import BN from 'bn.js';
import * as mathLib from 'mathjs'

mathLib.config({
    number: 'BigNumber', // Default type of number:
                         // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 18        // Number of significant digits for BigNumbers
  })
// import Bignumber from 'bignumber';
let data = [];

const coinList = config.base.concat(config.trades);

coinList.forEach( (obj, i) => {
    data.push({
        product: obj.productName,
        prCode: obj.productId,
        tokenAddress: obj.tokenAddress,
        decimal: obj.decimal
    });
    if(i === 0){
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

console.log("Config data --> ", Lodash.uniq(data));

function createSmartContract(){
    const selectedContract = contractList[(+localStorage.getItem('contract') || 0)];

    const contract_address = selectedContract.address;
    const { GlobalWeb3Object } = store.getState().main;
    const Contract = new GlobalWeb3Object.eth.Contract(selectedContract.abifile.abi, contract_address);
    return Contract;
}

// function* generateSmartContractObject() {
//     const Contract = createSmartContract();
//     yield put({type: Constants.default.Success.SMARTCONTRACT_OBJECT_SUCCESS, GlobalSmartContractObject: Contract});
// }

function* placeBuyOrder(params) {
    const Contract = createSmartContract();
    const { price, total } = params.payload;
    const isSell = false;
    const ownerId = 1;
    const prTrade = 2;
    const prBase = 3;
    
    const orderHash = Contract.methods.LimitOrder(ownerId, prTrade, prBase, isSell, price, total).send({
        from:  Contract.givenProvider.selectedAddress
    });
    yield put({type: Constants.default.Success.PLACE_BUY_ORDER_SUCCESS, buyOrderStatus: orderHash});
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

function sendAmount(amount,decimal) {
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

function recieveAmount(amount,decimal) {
    return amount / Math.pow(10,decimal)
}

function* getMyAccountId() {
    const Contract = createSmartContract();
    // const { prTrade = 2, prBase = 3, numOfOrdersToFetch = 10 } = params.payload;

    const res = yield call(Contract.methods.GetMyAccountId)
    const myAccountId = yield call(res.call, {
        from:  Contract.givenProvider.selectedAddress
    })

    yield put({type: Constants.default.Success.GET_MY_ACCOUNTID_SUCCESS, accountId: myAccountId});
}

function* getOrderBook(params) {
    const Contract = createSmartContract();
    const { prTrade = 2, prBase = 3, numOfOrdersToFetch = 10 } = params.payload;
    const tradeDecimal = coinList.find(coin => coin.productId === prTrade).decimal;
    const baseDecimal = coinList.find(coin => coin.productId === prBase).decimal;
   
    const res = yield call(Contract.methods.GetHoga, prTrade, prBase, numOfOrdersToFetch)
    const orderBook = yield call(res.call, {
        from:  Contract.givenProvider.selectedAddress
    })
    console.log("Order Book ----------->>> ", orderBook);
    yield put({type: Constants.default.Success.GET_ORDERBOOK_SUCCESS, orderbook: {
        priceA: orderBook.priceA,
        priceB: orderBook.priceB,
        volumeA: orderBook.volumeA,
        volumeB: orderBook.volumeB
    }});
}

function* getMyOrders() {
    const Contract = createSmartContract();
   
    const res = yield call(Contract.methods.GetMyOrders)
    const myOrders = yield call(res.call, {
        from:  Contract.givenProvider.selectedAddress
    })

    yield put({type: Constants.default.Success.GET_MY_ORDERS_SUCCESS, myOrders: myOrders});
}

function* placeSellOrder(params) {
    const Contract = createSmartContract();
    const { price, total } = params.payload;
    const isSell = true;
    const ownerId = 1;
    const prTrade = 2;
    const prBase = 3;
    
    const orderHash = Contract.methods.LimitOrder(ownerId, prTrade, prBase, isSell, price, total).send({
        from:  Contract.givenProvider.selectedAddress
    });
    yield put({type: Constants.default.Success.PLACE_SELL_ORDER_SUCCESS, sellOrderStatus: orderHash});
}

function* getBalance(params) {
    const { id } = params.payload;
    const Contract = createSmartContract();
    let prCodesArray = [];
    let tokens = [];
    for (let c of data) {
        if(+c.prCode)
            prCodesArray.push(+c.prCode);
            tokens.push({name: c.product, address: c.tokenAddress, decimal: c.decimal});
        // let x = yield c;
    }

    console.log("Tokens array --> ", tokens);


    const res = yield call(Contract.methods.getBalance, 2, Lodash.uniq(prCodesArray))
    const balance = yield call(res.call, {
        from:  Contract.givenProvider.selectedAddress
    });
    console.log("Balance from SC --> ", balance);
    let _result = [];
    // if(balance && balance.available && balance.available.length > 0){
        balance.available.forEach( (obj, index) => {
            let dec = 1 + 'e' + tokens[index].decimal;
            _result.push({
                name: tokens[index].name,
                hold: Web3.utils.toBN(balance.reserved[index]),
                total: (Web3.utils.toBN(obj) + Web3.utils.toBN(balance.reserved[index])) / Web3.utils.toBN(dec),
                tokenAddress: tokens[index].address
            });
        });
    // }else{
    //     for (let c of data) {
    //         _result.push({
    //             name: c.product,
    //             hold: 0,
    //             total: 0,
    //             tokenAddress: c.tokenAddress
    //         })
    //     }
    // }
    // c["balance"] = {hold: recieveAmount(+balance.reserved, decimals), total: recieveAmount(+balance.reserved + +balance.available, decimals)};
    // console.log("Balance of Token --====------==== >>> ", c)
    // data.push({productInfo: x.data, product: c});
    yield put({type: Constants.default.Success.GET_BALANCE_SUCCESS, balance: _result});
}

function* depositEthRequest(params) {
    console.log("We are here ===---->>>> ", params.payload);

    const Contract = createSmartContract();
    console.log("Address --> ", Contract.givenProvider)
    const { amount } = params.payload;
    const deposit = Contract.methods.depositETH().send({
        from:  Contract.givenProvider.selectedAddress,
        value: sendAmount(amount,18)
    });
    yield put({type: Constants.default.Success.DEPOSIT_ETH_SUCCESS, depositedEth: deposit});
}

function* withdrawEthRequest(params) {
    const Contract = createSmartContract();
    const { amount } = params.payload;
    const withdrawAmount = Contract.methods.withdrawETH(Web3.utils.toWei(amount, 'ether')).send({
        from:  Contract.givenProvider.selectedAddress
    });
    yield put({type: Constants.default.Success.WITHDRAW_ETH_SUCCESS, withdrawnAmount: withdrawAmount});
}

function* depositTokenRequest(params) {
    console.log("Depositing Token =======================================================  ")
    const Contract = createSmartContract();
    const { prAddress, amount } = params.payload;


    console.log("payload ---->>> ", params.payload);
    const config = coinList.find(coin => coin.tokenAddress === prAddress);
    // let a = new BN("1000000000000000000", 10);
    // let a = Web3.utils.toBN(1000000000000000000)
   // let a = amount +  'e' + config.decimal;
   //  console.log("Big number --> ", a);// 10e18
    const deposit = Contract.methods.depositWithdrawToken(prAddress, amount*1e18, true).send({
        from:  Contract.givenProvider.selectedAddress
    });
    yield put({type: Constants.default.Success.DEPOSIT_TOKEN_SUCCESS, depositedToken: deposit});
}

function* withdrawTokenRequest(params) {
    const Contract = createSmartContract(); 
    const { prAddress, amount } = params.payload;
    const config = coinList.find(coin => coin.tokenAddress === prAddress);
    let decimals = Web3.utils.toBN(config.decimal);
    const withdrawAmount = Contract.methods.depositWithdrawToken(prAddress, +sendAmount(amount, decimals), false).send({
        from:  Contract.givenProvider.selectedAddress
    });
    yield put({type: Constants.default.Success.WITHDRAW_TOKEN_SUCCESS, withdrawnAmount: withdrawAmount});
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
    
}

export default function* smartContractSaga() {
    yield all([
        actionWatcher()
    ]);
}