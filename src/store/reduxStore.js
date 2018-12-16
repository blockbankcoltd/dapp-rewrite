import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { logger  } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import registerSagas from '../sagas/index';
import Actions from '../actions/index';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];
const store = createStore(
    rootReducer, 
    applyMiddleware(...middlewares)
);

registerSagas(sagaMiddleware);

store.dispatch(Actions.global.putWeb3ToStore());

export default store;