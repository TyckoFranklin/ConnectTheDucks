import { dispatch_CONNECT_PORT, dispatch_ON_PORT_MESSAGE_ACTION, dispatch_DISCONNECT_PORTS } from '../store/actionCreators';
import { MAXIMUM_DEAD_TIME, CHECK_STILL_ALIVE_INTERVAL } from '../../constants/timings';
import { selectStateSlice } from '../../shared/utils/state';
import * as SA from '../../shared/actions';


export default class backgroundPortManagement {
    constructor(store) {
        this.store = store;
        chrome.runtime.onConnect.addListener((port) => {
            this.onConnectPort(port);
            this.onMessagePort(port);
            this.onDisconnectPort(port);
        });

        this.setupCheckConnections();
        chrome.browserAction.onClicked.addListener((tab) => {
            let ports = selectStateSlice(["ports"], this.store.getState())
            ports.forEach((value, key) => {
                if (value.sender.tab.id === tab.id) {
                    value.postMessage({
                        id: tab.id,
                        content: {
                            app: "menu",
                            visible: true
                        },
                        action: SA.SET_APP_VISIBILITY,
                    });
                }
            })
        });
    }

    setupCheckConnections() {
        setTimeout(() => {
            this.checkConnections();
            this.setupCheckConnections();
        }, CHECK_STILL_ALIVE_INTERVAL);
    }

    checkConnections() {
        let currentTime = new Date();
        const { lastUpdateFromPorts } = this.store.getState();
        let connectionsToRemove = [];
        lastUpdateFromPorts.forEach((value, key) => {
            if (currentTime - value > MAXIMUM_DEAD_TIME) {
                connectionsToRemove.push(key);
            }
        });
        if (connectionsToRemove.length > 0) {
            console.log("Removing connection due to inactivity", connectionsToRemove);
            this.store.dispatch(
                dispatch_DISCONNECT_PORTS(connectionsToRemove)
            );
        }
    }

    onConnectPort(port) {
        this.store.dispatch(
            dispatch_CONNECT_PORT(port)
        );
    }

    onDisconnectPort(port) {
        port.onDisconnect.addListener((port) => {
            this.store.dispatch(
                dispatch_DISCONNECT_PORTS([port.name])
            );
        });
    }

    onMessagePort(port) {
        port.onMessage.addListener((msg) => {
            this.store.dispatch(
                dispatch_ON_PORT_MESSAGE_ACTION(port, msg)
            );
        });

    }

}