
import { combineReducers } from 'redux'
import * as A from './actions';


export const testing = (state = ["a","b"], action) => {
    switch(action.type){
        case A.TESTING_ONE :{
            return ["c","d"]
        }
        case A.TESTING_TWO :{
            return ["e","f"]
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
            if(newState.set(action.payload.name,action.payload.port))
            console.log(newState);
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
