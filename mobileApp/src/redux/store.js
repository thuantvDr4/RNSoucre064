/*
* Store for redux
* */

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducers';
import rootSaga from './rootSagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const  store = createStore( rootReducer, applyMiddleware(sagaMiddleware) );

// then run the saga
sagaMiddleware.run(rootSaga);

//
export default store;
