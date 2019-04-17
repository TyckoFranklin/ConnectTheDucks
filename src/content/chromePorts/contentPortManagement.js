import uuid from 'uuid';
import { dispatch_CONNECT_PORT, dispatch_ON_PORT_MESSAGE_ACTION, dispatch_DISCONNECT_PORT } from '../store/actionCreators';
import * as A from '../store/actions';
import * as SHARED from '../../shared/actions';
import { SEND_STILL_ALIVE_INTERVAL } from '../../constants/timings';


export default class contentPortManagement {
    constructor(store) {
        this.store = store;
        this.portName = uuid.v4();
        this.port = chrome.runtime.connect({ name: this.portName })
        this.setPort();
        this.onMessagePort();
        this.statusUpdateMsg = {
            action: SHARED.STILL_ALIVE,
            content: {
                port: this.portName
            }
        };
        // this.removePortMsg = {
        //     action: SHARED.STILL_ALIVE,
        //     content: {
        //         port: this.portName
        //     }
        // };
        this.statusUpdate();
    }

    setPort() {
        this.store.dispatch(dispatch_CONNECT_PORT(this.port));
    }
    // onLeavePage() {
    //     window.addEventListener("beforeunload", ()=>{
    //         this.port.postMessage(this.removePortMsg);
    //         this.port.disconnect();
    //     });
    // }

    onMessagePort() {
        this.port.onMessage.addListener((msg) => {
            this.store.dispatch(
                dispatch_ON_PORT_MESSAGE_ACTION(msg)
            );
        });
    }

    statusUpdate() {
        setTimeout(() => {
            this.port.postMessage(this.statusUpdateMsg);
            this.statusUpdate();
        }, SEND_STILL_ALIVE_INTERVAL)

    }

    onPortDisconnect(port) {
        port.onDisconnect.addListener(() => {
            this.store.dispatch(
                dispatch_DISCONNECT_PORT()
            );
        });
    }
}