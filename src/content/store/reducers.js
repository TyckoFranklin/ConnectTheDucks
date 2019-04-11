
import { combineReducers } from 'redux'
import * as A from './actions';

const appVisibleInitialState = new Map([
    ["app1", false],
    ["app3", false]
]
);
export const appVisible = (state = appVisibleInitialState, action) => {
    switch (action.type) {
        case A.SET_APP_VISIBILITY: {
            let newState = (state);
            newState.set(action.payload.app, action.payload.visible);
            return newState;
        }
        default: {
            return state;
        }
    }
}

export const testing = (state = ["a", "b"], action) => {
    switch (action.type) {
        case A.TESTING_ONE: {
            return action.payload;
        }
        case A.TESTING_TWO: {
            return action.payload;
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
        case A.DISCONECT_PORT: {
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
    testing,
    port,
    appVisible
})
