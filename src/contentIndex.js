import PortManagement from './content/chromePorts/contentPortManagement';
import { configureStore } from './content/store/store';
import ContentApplicationManagement from './content/applications/ContentApplicationManagement';



const store = configureStore();
window.store = store;
const portManager = new PortManagement(store);
const contentApplicationManagement = new ContentApplicationManagement(store);

store.subscribe(() => {
    contentApplicationManagement.update(store.getState());
})