import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import reducers from './reducers';
import {portMiddleware} from './portMiddleware';

const appliedMiddleware = applyMiddleware(logger, portMiddleware);

export const configureStore = () => {
    return createStore(reducers, appliedMiddleware)
}
