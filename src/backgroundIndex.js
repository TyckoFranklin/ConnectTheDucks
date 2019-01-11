// let timewhimy = () => {
//     console.log("still running");
//     setTimeout(timewhimy, 2050);
// }
// timewhimy();



import { configureStore, getTesting } from './background/store/store';
import * as AC from './background/store/actionCreators'


const store = configureStore();

console.log(getTesting(store));

store.dispatch(AC.dispatch_TESTING_ONE());

console.log(getTesting(store));

store.dispatch(AC.dispatch_TESTING_TWO());

console.log(getTesting(store));
