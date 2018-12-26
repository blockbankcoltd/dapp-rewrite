import { createStore, applyMiddleware } from 'redux';
import { logger  } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import registerSagas from '../sagas/index';
import Actions from '../actions/index';
import initState from '../reducers/initialState';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];



const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

// store.dispatch(Actions.global.putWeb3ToStore());
  
//   console.log(store.getState())

registerSagas(sagaMiddleware);

// store.dispatch(Actions.global.putWeb3ToStore());
// setTimeout(() => {
//     store.dispatch(Actions.global.putSmartContractToStore());
// }, 2000);

export default store;