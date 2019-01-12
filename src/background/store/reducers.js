
import { combineReducers } from 'redux'
import * as A from './actions';


export const testing = (state = ["a","b"], action) => {
    switch(action.type){
        case A.TESTING_ONE :{
            return action.payload;
        }
        case A.TESTING_TWO :{
            return action.payload;
        }
        default :{
            return state;
        }
    }
}

export const ports = (state = new Map(), action) => {
    switch(action.type){
        case A.CONNECT_PORT :{
            let newState = new Map(state);
            newState.set(action.payload.name,action.payload.port)
            return newState;
        }        
        case A.DISCONECT_PORT :{
            let newState = new Map(state);
            newState.get(action.payload.name).disconnect();
            newState.delete(action.payload.name)
            return newState;
        }        
        default :{
            return state;
        }
    }
}

export default combineReducers({
    testing,
    ports
})
