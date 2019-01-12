import { chromeruntimeOnConnect } from './callbackToPromise';
import { dispatch_CONNECT_PORT, dispatch_ON_PORT_MESSAGE_ACTION } from '../store/actionCreators';
import * as A from '../store/actions';

export default class backgroundPortManagement {
    constructor(store) {
        this.store = store;
        chrome.runtime.onConnect.addListener((port) => {
            this.onConnectPort(port);
            this.onMessagePort(port);           
        });       
    }

    
    onConnectPort(port){
        this.store.dispatch(
            dispatch_CONNECT_PORT(port)
        );
    }
    
    onMessagePort(port){
        port.onMessage.addListener((msg) => {
            this.store.dispatch(
                dispatch_ON_PORT_MESSAGE_ACTION(port, msg)
            );
          });
       
    }

}