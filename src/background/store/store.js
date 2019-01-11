import { createStore } from 'redux'
import reducers from './reducers'

export const configureStore = () => {
  return createStore(reducers)
}

export const getTesting = (store) => {
    return store.getState().testing
}