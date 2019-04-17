import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import JavaScriptInjection from './_JavaScriptInjection';
import { javaScriptInjectionHandlerStyle } from './JavaScriptInjectionCSS';
import * as Ids from '../../../shared/constants/applicationIds';
import { dispatch_Update_APP_VISIBILITY } from '../../store/actionCreators';



export default class JavaScriptInjectionHandler {
    constructor(store) {
        this.store = store;
    }

    initialize() {
        this.hasInitialized = true;
        this.fragment = document.createDocumentFragment();
        this.reactParent = document.createElement('div');
        this.reactParent.setAttribute('id', 'connect-the-ducks-javascript-injection-root');
        for (let key in javaScriptInjectionHandlerStyle) {
            this.reactParent.style[key] = javaScriptInjectionHandlerStyle[key];
        }
        this.fragment.appendChild(this.reactParent);
        ReactDOM.render(<Provider store={store}>
            <JavaScriptInjection
                closeApp={this.closeApp}
                showMenu={this.showMenu}
            />
        </Provider>, this.reactParent);
    }

    closeApp = () => {
        this.store.dispatch(dispatch_Update_APP_VISIBILITY(Ids.INJECT_JAVASCRIPT, false));
    }

    showMenu = (id) => {
        this.closeApp();
        this.store.dispatch(dispatch_Update_APP_VISIBILITY(Ids.MENU, true));
    }

    update(visible) {
        if (!this.hasInitialized) {
            if (visible) {
                this.initialize();
            } else {
                return;
            }
        }
        if (visible) {
            document.body.appendChild(this.reactParent);
        } else {
            this.fragment.appendChild(this.reactParent);
        }
    }

}