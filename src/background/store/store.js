import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import reducers from './reducers';

const appliedLogger = applyMiddleware(logger)

const rootReducer = (state, action) => {
    console.log("statessss", state, "actionssdss", action)
    if (action.type === 'RESET_APP') {
        state = {
            "testing": [
                "a",
                "b"
            ],
            "ports": new Map([
                [
                    "8273c2d0-9d7d-47ab-bd50-18b876983cf8",
                    {
                        "sender": {
                            "id": "nlolladejoooppfflaaahfjglofmidgl",
                            "url": "https://redux.js.org/api/store#replaceReducer",
                            "tab": {
                                "active": true,
                                "audible": false,
                                "autoDiscardable": true,
                                "discarded": false,
                                "favIconUrl": "https://redux.js.org/img/favicon/favicon.ico",
                                "height": 938,
                                "highlighted": true,
                                "id": 1210,
                                "incognito": false,
                                "index": 12,
                                "mutedInfo": {
                                    "muted": false
                                },
                                "pinned": false,
                                "selected": true,
                                "status": "loading",
                                "title": "Store · Redux",
                                "url": "https://redux.js.org/api/store#replaceReducer",
                                "width": 1920,
                                "windowId": 693
                            },
                            "frameId": 0
                        }
                    }
                ]
            ]),
            "lastUpdateFromPorts": new Map([
                [
                    "8273c2d0-9d7d-47ab-bd50-18b876983cf8",
                    "2019-02-01T08:17:27.438Z"
                ]
            ])
        }
    }
    return reducers(state, action);
}

export const configureStore = () => {
    return createStore(rootReducer, appliedLogger)
}

export const getTesting = (store) => {
    return store.getState().testing
}