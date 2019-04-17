import MenuHandler from './Menu/MenuHandler';
import * as Ids from '../../shared/constants/applicationIds'
import { dispatch_Update_MULTIPLE_APPS_VISIBILITY } from '../store/actionCreators'


export const initialize = (store) => {
    const applications = new Map([
        [Ids.MENU, new MenuHandler(store)]
    ]);
    
    store.dispatch(dispatch_Update_MULTIPLE_APPS_VISIBILITY(applications))
    return applications;
}