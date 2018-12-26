import { createStore, applyMiddleware } from 'redux';
import { logger  } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import registerSagas from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);
registerSagas(sagaMiddleware);

export default store;