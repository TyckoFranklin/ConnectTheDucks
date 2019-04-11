import { } from './shared/actions';
import { } from './shared/actionCreators';
import uuid from 'uuid';
import PortManagement from './content/chromePorts/contentPortManagement';
import { configureStore } from './content/store/store';
import App1 from './content/app1';



const store = configureStore();
window.store = store;
const portManager = new PortManagement(store);
const app = new App1(store);

store.subscribe(() => {
    app.update();
})