
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

export default combineReducers({
    testing
})
