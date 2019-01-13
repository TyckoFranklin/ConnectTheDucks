import {} from './shared/actions';
import {} from './shared/actionCreators';
import uuid from 'uuid';
import PortManagement from './content/chromePorts/contentPortManagement';
import { configureStore } from './content/store/store';



const store = configureStore();
window.store = store;

store.subscribe(()=>{
    console.log("store", store.getState());

})

const portManager = new PortManagement(store);
