import Provider from '../../Global/Provider-Api';
import {
    URL_CART_LIST,
    URL_HISTORY_LIST,
    URL_PRODUCT_LIST,
    INIT_PRODUCT
} from '../../Global/system';

class Services {

    async clearData(apiType) {
        this.Provider = new Provider({ apiType });
        await this.Provider.api({ type: "DELETE", url: URL_CART_LIST });
        await this.Provider.api({ type: "DELETE", url: URL_HISTORY_LIST });
        await this.Provider.api({ type: "PUT", url: URL_PRODUCT_LIST, data: INIT_PRODUCT });
    };

};

export default new Services();