import { configureStore, getTesting } from './background/store/store';
import {dispatch_TESTING_TWO, dispatch_TESTING_ONE } from './background/store/actionCreators'
import PortManagement from './background/chromePorts/backgroundPortManagement';

const store = configureStore();
window.store = store;

store.subscribe(()=>{
    console.log("store", store.getState());

})

const portManager = new PortManagement(store);


