import { put, takeLatest, all } from 'redux-saga/effects';
import store from '../store/reduxStore';
import * as contractJson from '../utilities/DEXHIGH2.json';
import * as Constants from '../constants/constants'

function* generateSmartContractObject() {
    debugger
    const contract_address = "0x5755b3ec6ee60c9ab93d9c28e789a44b67237c85";
    const { GlobalWeb3Object } = store.getState().main;
    const Contract =  GlobalWeb3Object.eth.Contract(contractJson.abi, contract_address);
    // if(web3.eth.at(contractAddress)){
    // }else{

    // }

    yield put({type: Constants.default.Success.GENERATED_SMARTCONTRACT_OBJECT, GlobalSmartContractObject: Contract});
}

function* actionWatcher() {
    yield takeLatest(Constants.default.Requests.GENERATE_SMARTCONTRACT_OBJECT, generateSmartContractObject)
}

export default function* smartContractSaga() {
    yield all([
        actionWatcher()
    ]);
}