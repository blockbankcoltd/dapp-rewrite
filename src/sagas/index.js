import { put, takeLatest, all } from 'redux-saga/effects';
import blockchainSaga from './blockchainSaga';
import smartContractSaga from './smartContractSaga';
import languageSaga from './languageSaga';
// const awsNodeServerURL = `http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:3000`;
const awsNodeServerURL = `192.168.0.40:3000`;

const sagas = [
    blockchainSaga,
    smartContractSaga,
    languageSaga
]
export default function registerWithMiddleware(middleware){
    for(let name in sagas){
        middleware.run(sagas[name]);
    }
};