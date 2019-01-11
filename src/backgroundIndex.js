import { configureStore, getTesting } from './background/store/store';
import * as AC from './background/store/actionCreators'
import PortManagement from './background/chromePorts/PortManagement';

const store = configureStore();
window.store = store;

console.log(getTesting(store));

const portManager = new PortManagement(store);

store.dispatch(AC.dispatch_TESTING_ONE());

console.log(getTesting(store));

store.dispatch(AC.dispatch_TESTING_TWO());

console.log(getTesting(store));
