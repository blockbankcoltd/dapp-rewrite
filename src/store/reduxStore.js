/* import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { logger  } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// import rootSaga from '../sagas/index';
import * as sagas from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();
// const middlewares = [thunk];
const middlewares = [sagaMiddleware, logger];
// const store = createStore(
//     rootReducer, 
//     // initState, 
//     applyMiddleware(...middlewares)
// );

const makeStore = () => {
    return createStore(
        rootReducer, 
        // initState, 
        applyMiddleware(...middlewares)
    );
}

// sagas.registerWithMiddleware(sagaMiddleware);

// sagaMiddleware.run(rootSaga);


// store.dispatch({
//     type: "FETCH_ACTIVE_LANGUAGE"
// });

// store.dispatch({
//     type: "SWITCH_LANGUAGE",
//     langType: "kr"
// });


export default makeStore; */


import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { logger  } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];
const store = createStore(
    rootReducer, 
    applyMiddleware(...middlewares)
);

console.log("SAGAS --> ", sagas);
sagas(sagaMiddleware);

export default store;