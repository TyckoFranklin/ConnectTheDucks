import uuid from 'uuid';
import { dispatch_CONNECT_PORT, dispatch_ON_PORT_MESSAGE_ACTION } from '../store/actionCreators';
import * as A from '../store/actions';
import * as SHARED from '../../shared/actions';
import { SEND_STILL_ALIVE_INTERVAL } from '../../constants/timings';


export default class contentPortManagement {
    constructor(store) {
        this.store = store;
        this.portName = uuid.v4();
        this.port = chrome.runtime.connect({ name: this.portName })
        this.onMessagePort(this.port);
        this.statusUpdateMsg = {
            action: SHARED.STILL_ALIVE,
            content: {
                port: this.portName
            }
        };
        this.statusUpdate();
    }

    onMessagePort(port) {
        port.onMessage.addListener((msg) => {
            console.log(msg);
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
}