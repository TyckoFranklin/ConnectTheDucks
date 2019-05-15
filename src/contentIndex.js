import PortManagement from './content/chromePorts/contentPortManagement';
import { configureStore } from './content/store/store';
import ContentApplicationManagement from './content/applications/ContentApplicationManagement';
import ClipBoard from './content/clipboard/ClipBoard';



const store = configureStore();
window.store = store;
const portManager = new PortManagement(store);
const contentApplicationManagement = new ContentApplicationManagement(store);
const clipboard = new ClipBoard({ store, port: portManager.port });

store.subscribe(() => {
    contentApplicationManagement.update(store.getState());
})