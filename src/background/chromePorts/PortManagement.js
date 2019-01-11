import chromeruntimeOnConnect from './callbackToPromise';
import dispatch_CONNECT_PORT from '../store/actionCreators';
import * as A from '../store/actions';

export default class PortManagement {
    constructor(store) {
        this.store = store;
        console.log("here");
        chrome.runtime.onConnect.addListener((port) => {
            this.store.dispatch({
                type: A.CONNECT_PORT,
                payload: {
                    name: port.name,
                    port
                }
            });                
        });           
    }

}