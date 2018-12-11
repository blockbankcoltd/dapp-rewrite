import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import languageReducer from './languageReducer';

export default combineReducers({
    main: mainReducer,
    language: languageReducer
});

// export default mainReducer;