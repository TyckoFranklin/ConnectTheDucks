
import { combineReducers } from 'redux'
import * as A from './actions';

export const applicationVisibility = (state = new Map(), action) => {
    switch (action.type) {
        case A.SET_APP_VISIBILITY: {
            let newState = new Map();
            const {app, visible } = action.payload;
            for(let [key, value] of state){
                newState.set(key, value);
            }
            newState.set(app, visible);
            return newState;
        }
        case A.SET_MULTIPLE_APP_VISIBILITY: {
            let newState = new Map();
            for(let [key, value] of state){
                newState.set(key, value);
            }
            for(let [key, value] of action.payload){
                newState.set(key, value);
            }
            return newState;
        }
        default: {
            return state;
        }
    }
}

export const port = (state = {}, action) => {
    switch (action.type) {
        case A.CONNECT_PORT: {
            if (state.disconnect) {
                state.disconnect();
            }
            return action.payload;
        }
        case A.DISCONNECT_PORT: {
            if (state.disconnect) {
                state.disconnect();
            }
            return {};
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    port,
    applicationVisibility
})
