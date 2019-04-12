import { configureStore, getTesting } from './background/store/store';
import { dispatch_TESTING_TWO, dispatch_TESTING_ONE } from './background/store/actionCreators'
import PortManagement from './background/chromePorts/backgroundPortManagement';

const store = configureStore();
window.store = store;

const portManager = new PortManagement(store);


