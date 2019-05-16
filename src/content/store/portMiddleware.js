import { postActionToPort } from './actionCreators';

export const portMiddleware = store => next => action => {
    /* only care about port actions  */
    if (action.portAction) {
        const { port } = store.getState();
        /*  If port can post message */
        if (port.postMessage) {
            port.postMessage(postActionToPort(action, port));
        }
    }
    next(action);
}