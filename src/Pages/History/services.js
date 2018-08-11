import Provider from '../../Global/Provider-Api';
import {
    API_TYPE,
    URL_HISTORY_LIST
} from '../../Global/system';

class Services {
    
    constructor() {
        this.Provider = new Provider({
            apiType: API_TYPE,
        });
    };

    async getHistoryData() {
        const dataRes = await this.Provider.api({ type: "GET", url: URL_HISTORY_LIST });
        return dataRes.datas || [];
    };
};

export default new Services();