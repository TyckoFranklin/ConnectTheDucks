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

export const dispatch_CONNECT_PORT = (port) => {
    return {
        type: A.CONNECT_PORT,
        payload: {
            name: port.name,
            port
        }
    };
}

export const dispatch_DISCONNECT_PORTS = (names) => {
    return {
        type: A.DISCONNECT_PORTS,
        payload: {
            names
        }
    };
}

export const dispatch_ON_PORT_MESSAGE_ACTION = (port, msg) => {
    return {
        type: msg.action,
        payload: {
            port: port.name,
            content: msg.content
        }
    };
}