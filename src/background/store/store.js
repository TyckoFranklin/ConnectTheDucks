import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import reducers from './reducers';

const appliedLogger = applyMiddleware(logger)

const rootReducer = (state, action) => {
    if (action.type === 'RESET_APP') {
        state = {
            "testing": [
                "a",
                "b"
            ]
        }
    }
    return reducers(state, action);
}

export const configureStore = () => {
    return createStore(rootReducer, appliedLogger)
}

export const getTesting = (store) => {
    return store.getState().testing
}