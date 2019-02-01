import * as A from './actions'

export const dispatch_CONNECT_PORT = (port) => {
    return {
        type: A.CONNECT_PORT,
        payload: {            
            port
        }
    };
}

export const dispatch_DISCONNECT_PORT = () => {
    return {
        type: A.DISCONNECT_PORT,
        payload: null
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

export const dispatch_Update_APP_VISIBILITY = (app, visible) => {
    return {
        type: A.SET_APP_VISIBILITY,
        payload: {
            app,
            visible
        }
    };
}
