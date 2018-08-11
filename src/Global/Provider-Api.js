import ProviderFirebase from './Provider-Api-Firebase';
import ProviderLocalStorage from './Provider-Api-LocalStorage';
import {
    API_TYPE
} from './system';

const INIT = {
    apiType: API_TYPE
};

export default class Provider {

    apiType = ""; //NOTE: [ FIREBASE , LOCAL_STORAGE , MEMORY ]

    constructor(options = INIT) {
        if (options.apiType) this.apiType = options.apiType;
    };

    api(options) {
        const apiType = this.apiType;
        return new Promise(async function(resolve, reject) {
            if (apiType === "FIREBASE") {
                resolve(await ProviderFirebase.api(options));
            } else if (apiType === "LOCAL_STORAGE") {
                resolve(await ProviderLocalStorage.api(options));
            } else {
                reject("Error");
            }
        });
    };
};