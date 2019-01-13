
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

export const port = (state = {}, action) => {
    switch(action.type){
        case A.CONNECT_PORT :{
            if(state.disconnect){
                state.disconnect();
            }
            return action.payload;
        }        
        case A.DISCONECT_PORT :{
            if(state.disconnect){
                state.disconnect();
            }
            return {};
        }        
        default :{
            return state;
        }
    }
}

export default combineReducers({
    testing,
    port
})
