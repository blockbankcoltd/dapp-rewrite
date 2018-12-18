import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import store from '../store/reduxStore';
import * as contractJson from '../utilities/DEXHIGH2.json';
import * as Constants from '../constants/constants';
import {config, filterMarkets} from '../utilities/config';
import Lodash from 'lodash';
let data = [];

config.trades.forEach( (obj, i) => {
    data.push({
        product: obj.productName,
        prCode: obj.productId,
        tokenAddress: obj.tokenAddress
    });
    if(i === 0){
        if (obj.prTrade && obj.prTrade.length > 0) {
            obj.prTrade.forEach(o => {
                data.push({
                    product: o.productName,
                    prCode: o.productId,
                    tokenAddress: o.tokenAddress
                });
            })
        }
    }
});

console.log("Config data --> ", Lodash.uniq(data));

function createSmartContract(){
    const contract_address = "0x6be6a4bdc15e8ce8986dd58677f93c312484cdc0";
    const { GlobalWeb3Object } = store.getState().main;
    const Contract = new GlobalWeb3Object.eth.Contract(contractJson.abi, contract_address);
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

function* getOrderBook(params) {
    const Contract = createSmartContract();
    const { prTrade = 2, prBase = 3, numOfOrdersToFetch = 10 } = params.payload;
   
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
    // const { prTrade = 2, prBase = 3, numOfOrdersToFetch = 10 } = params.payload;
   
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

function* getBalance() {
    // const { prCode } = params;
    const Contract = createSmartContract();
    for (let c of data) {
        // let x = yield c;
        const res = yield call(Contract.methods.getBalance, c.prCode)
        const balance = yield call(res.call, {
            from:  Contract.givenProvider.selectedAddress
        })
        console.log("Balance from SC --> ", balance)
        c["balance"] = {hold: +balance.reserved, total: +balance.reserved + +balance.available};
        // console.log("Balance of Token --====------==== >>> ", c)
        // data.push({productInfo: x.data, product: c});
    }
    yield put({type: Constants.default.Success.GET_BALANCE_SUCCESS, balance: data});
}

function* depositEthRequest(params) {
    console.log("We are here ===---->>>> ", params.payload);
    const Contract = createSmartContract();
    const { amount } = params.payload;
    const deposit = Contract.methods.depositETH().send({
        from:  Contract.givenProvider.selectedAddress,
        value: +amount
    });
    yield put({type: Constants.default.Success.DEPOSIT_ETH_SUCCESS, depositedEth: deposit});
}

function* withdrawEthRequest(params) {
    const Contract = createSmartContract();
    const { amount } = params.payload;
    const withdrawAmount = Contract.methods.withdrawETH(+amount).send({
        from:  Contract.givenProvider.selectedAddress,
        value: amount
    });
    yield put({type: Constants.default.Success.WITHDRAW_ETH_SUCCESS, withdrawnAmount: withdrawAmount});
}

function* depositTokenRequest(params) {
    const Contract = createSmartContract();
    const { prAddress, amount } = params.payload;
    const deposit = Contract.methods.depositToken(prAddress, +amount).send({
        from:  Contract.givenProvider.selectedAddress
    });
    yield put({type: Constants.default.Success.DEPOSIT_TOKEN_SUCCESS, depositedToken: deposit});
}

function* withdrawTokenRequest(params) {
    const Contract = createSmartContract(); 
    const { prAddress, amount } = params.payload;
    const withdrawAmount = Contract.methods.withdrawToken(prAddress, +amount).send({
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
    
}

export default function* smartContractSaga() {
    yield all([
        actionWatcher()
    ]);
}