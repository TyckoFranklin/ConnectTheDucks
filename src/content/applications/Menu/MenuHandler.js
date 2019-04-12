import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Menu from './_Menu';
import { menuHandlerStyle } from './MenuCSS';


export default class MenuHandler {
    constructor(store) {
        this.store = store;
    }

    initialize() {
        this.hasInitialized = true;
        this.fragment = document.createDocumentFragment();
        this.reactParent = document.createElement('div');
        this.reactParent.setAttribute('id', 'connect-the-ducks-menu-root');
        for(let key in menuHandlerStyle){
            this.reactParent.style[key] = menuHandlerStyle[key];
        }
        this.fragment.appendChild(this.reactParent);
        ReactDOM.render(<Provider store={store}>
            <Menu />
        </Provider>, this.reactParent);
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