import * as A from './actions'

export const dispatch_CONNECT_PORT = (payload) => {
    return {
        type: A.CONNECT_PORT,
        payload,
    };
}

export const dispatch_DISCONNECT_PORT = () => {
    return {
        type: A.DISCONNECT_PORT,
        payload: null
    };
}

export const dispatch_ON_PORT_MESSAGE_ACTION = (msg) => {
    const {action, id, content} = msg;
    return {
        type: action,
        payload: {
            port: id,
            ...content
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

export const dispatch_Update_MULTIPLE_APPS_VISIBILITY = (mapOfApps) => {
    const visibility = new Map();
    for(let [key, value] of mapOfApps){
        visibility.set(key, false);
    }
    return {
        type: A.SET_MULTIPLE_APP_VISIBILITY,
        payload: visibility

    };
}

export const postActionToPort = (action) => {
    return {
        action: action.type,
        content: {
            ...action.payload
        }
    };
}
