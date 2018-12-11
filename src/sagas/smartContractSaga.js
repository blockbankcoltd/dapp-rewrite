import { put, takeLatest, all } from 'redux-saga/effects';
// const awsNodeServerURL = `http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:3000`;
const awsNodeServerURL = `192.168.0.40:3000`;



function* getSmartContracts() {
    yield put({ type: "RECEIVED_SMARTCONTRACTS", smartContracts: [{value: true}, {value: false}] });
}

function* actionWatcher() {
    yield takeLatest('FETCH_SMARTCONTRACTS', getSmartContracts)
}

export default function* smartContractSaga() {
    yield all([
        actionWatcher()
    ]);
}