import blockchainSaga from './blockchainSaga';
import smartContractSaga from './smartContractSaga';
import languageSaga from './languageSaga';
import globalSaga from './globalSaga';

const sagas = [
    blockchainSaga,
    smartContractSaga,
    languageSaga,
    globalSaga
]
export default function registerWithMiddleware(middleware){
    for(let name in sagas){
        middleware.run(sagas[name]);
    }
}