import * as A from './actions'

export const dispatch_TESTING_ONE = () => {
    return {
        type: A.TESTING_ONE,
        payload: [1]
    };
}

export const dispatch_TESTING_TWO = () => {
    return {
        type: A.TESTING_TWO,
        payload: [2]
    };
}