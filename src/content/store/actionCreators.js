import * as A from './actions'

export const dispatch_CONNECT_PORT = (port) => {
    return {
        type: A.CONNECT_PORT,
        payload: {            
            port
        }
    };
}

export const dispatch_ON_PORT_MESSAGE_ACTION = (msg) => {
    return {
        type: msg.action,
        payload: {
            port: msg.id,
            content: msg.content
        }
    };
}
