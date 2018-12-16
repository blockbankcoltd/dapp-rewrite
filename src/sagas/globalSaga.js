
import { put, takeLatest, all } from 'redux-saga/effects';
import store from '../store/reduxStore';
import * as contractJson from '../utilities/DEXHIGH2.json';
import * as Constants from '../constants/constants'
import Web3 from 'web3';

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

function* actionWatcher() {
    yield takeLatest(Constants.default.Requests.WEB3_OBJECT_REQUEST, generateGlobalWeb3Object)
}

export default function* smartContractSaga() {
    yield all([
        actionWatcher()
    ]);
}