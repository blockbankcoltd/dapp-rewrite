
import { put, takeLatest, takeEvery, all, call } from 'redux-saga/effects';
import Web3 from 'web3';
import store from '../store/reduxStore';
import axios from 'axios';
import * as contractJson from '../utilities/DEXHIGH2.json';
import * as Constants from '../constants/constants'
import { config, filterMarkets, contractList } from '../utilities/config';

const CheckProvider = () => {
    return window.web3 && window.web3.currentProvider ? window.web3.currentProvider : (Web3.givenProvider ? Web3.givenProvider : null);
};

function* generateGlobalWeb3Object() {
    if(window.web3){
        const ProvidersWeb3 = CheckProvider();
        if(ProvidersWeb3 !== null){
            const GlobalWeb3Object = new Web3(ProvidersWeb3);
            yield put({type: Constants.default.Success.WEB3_OBJECT_SUCCESS, web3Object: GlobalWeb3Object});
        }else{
            yield put({type: Constants.default.Failure.WEB3_OBJECT_FAILURE, error: "Failed to Create a global Web3 Object. Please check your Provider and refresh the page."});
        }
    }else{
        yield put({type: Constants.default.Failure.WEB3_OBJECT_FAILURE, error: "Failed to Create a global Web3 Object. Please check your Provider and refresh the page."});
    }

}

function* generateSmartContractObject() {
    const selectedContract = contractList[(+localStorage.getItem('contract') || 0)];
    const contract_address = selectedContract.address;
    const { GlobalWeb3Object } = store.getState().main;
    const Contract = new GlobalWeb3Object.eth.Contract(selectedContract.abifile.abi, contract_address);
    yield put({type: Constants.default.Success.SMARTCONTRACT_OBJECT_SUCCESS, GlobalSmartContractObject: Contract});
}

function* fetchTradeHistory(params){
    const { accountId, trade, base } = params.payload;
    let query = ``;

    // if(accountId){
    //     query += `user=${accountId}&`;
    // }
    if(trade){
        query += `trade=${trade}&`;
    }
    if(base){
        query += `base=${base}`
    }
    console.log("QUERY STRINGS --> ", query)
    
    const result = yield axios.get(`http://localhost:8000/fetch/fetchTradeHistory?${query}`);
    yield put({type: Constants.default.Success.FETCH_TRADE_HISTORY_SUCCESS, result: result.data})
}


function* actionWatcher() {
    yield takeLatest(Constants.default.Requests.WEB3_OBJECT_REQUEST, generateGlobalWeb3Object)
    yield takeLatest(Constants.default.Requests.SMARTCONTRACT_OBJECT_REQUEST, generateSmartContractObject)
    yield takeEvery(Constants.default.Requests.FETCH_TRADE_HISTORY_REQUEST, fetchTradeHistory)
}

export default function* smartContractSaga() {
    yield all([
        actionWatcher()
    ]);
}