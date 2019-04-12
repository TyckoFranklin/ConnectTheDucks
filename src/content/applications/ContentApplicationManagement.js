import { selectStateSlice } from '../../shared/utils/state';
import { initialize } from './ApplicationIndex';

export default class ContentApplicationManagement {
    constructor(store) {
        this.store = store;
        this.visibleApplications = new Map();
        this.applications = initialize(store);
    }

    update(state) {
        let visibleApplications = selectStateSlice(["applicationVisibility"], state);
        for (let [key, visible] of visibleApplications) {
                this.visibleApplications.set(key, visible);
                this.applications.get(key).update(visible);
        }
    }
}