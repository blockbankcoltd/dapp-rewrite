import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import languageReducer from './languageReducer';
import smartContractReducer from './smartContract_reducer';

export default combineReducers({
    main: mainReducer,
    language: languageReducer,
    smartContract: smartContractReducer
});

// export default mainReducer;