import promiseMiddleware from 'redux-promise-middleware';
import {applyMiddleware, createStore} from "redux";

import reducers from '../reducers';

const configureStore = () => {
    return createStore(reducers, {}, applyMiddleware(promiseMiddleware()));
}

export default configureStore;