import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import reducers from './reducers';

const appliedLogger =  applyMiddleware(logger)

export const configureStore = () => {
  return createStore(reducers, appliedLogger)
}
