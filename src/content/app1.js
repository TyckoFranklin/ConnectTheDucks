import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {selectStateSlice} from '../shared/utils/state';
import App from './app1/App';
import './app1.css';


export default class app1 {
    constructor(store) {
        this.store = store;
        this.fragem = document.createDocumentFragment();
        this.reactParent = document.createElement('div');
        // update to unique value before production.
        this.reactParent.setAttribute('class', 'app1');
        this.fragem.appendChild(this.reactParent);
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            this.reactParent)
        // registerServiceWorker();
        this.update();


        // window.mayRender = false;
        // window.keepRendering = false;
        // window.hasRendered = false;

        // let timewhimy = () => {
        //     console.log("still running");
        //     setTimeout(timewhimy, 250);
        //     if (window.stopRendering === true && window.mayRender === true) {
        //         console.log("Stopping");
        //         window.mayRender = false;
        //         window.keepRendering = false;
        //         let newRoot = document.createElement("div");
        //         newRoot.setAttribute("id", "root");
        //         let oldRoot = document.querySelector("#root");
        //         oldRoot.parentElement.removeChild(oldRoot);
        //         document.body.appendChild(newRoot);
        //         return;
        //     }
        //     if (window.mayRender && !window.keepRendering) {
        //         window.keepRendering = true;
        //         let store;
        //         if (!window.hasRendered) {
        //             store = createStore(reducers);
        //             window.store = store;
        //             window.hasRendered = true;
        //         } else {
        //             store = window.store;
        //         }
                
        //     }
        // }
        // timewhimy();
    }

    update(){
        let newVisible = selectStateSlice(["appVisible"],this.store.getState()).get("app1");
        console.log(newVisible);
        // situations:
        // app is visible.
        if(this.visible !== newVisible){
            this.visible = newVisible;
        } else {
            return;
        }
        if(this.visible){
            document.body.appendChild(this.reactParent);
        } else {
            this.fragem.appendChild(this.reactParent);
        }
    }

}