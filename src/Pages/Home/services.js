import Provider from '../../Global/Provider-Api';
import {
    API_TYPE,
    URL_CART_LIST,
    URL_PRODUCT_LIST
} from '../../Global/system';

class Services {

    constructor() {
        this.Provider = new Provider({
            apiType: API_TYPE,
        });
    };

    async getProduct() {
        const dataRes = await this.Provider.api({ type: "GET", url: URL_PRODUCT_LIST });
        return dataRes.datas || [];
    };

    async addToCart(payload = { user_id: 0, product_id: 0, qty: 0 }, product_data = { id: 0, in_stock: 0 }) {
        if (payload.qty <= 0) {
            return {
                status: 2,
                msg: "Please input more than 1"
            }
        } else if (isNaN(parseInt(payload.qty, 0))) {
            return {
                status: 3,
                msg: "Please input number only"
            }
        } else {
            //Update Stock
            const dataResUpdateStock = await this.updateStock(payload, product_data);
            if (dataResUpdateStock.status !== 1) {
                return dataResUpdateStock;
            }
            //Add to Cart
            const dataRes = await this.Provider.api({ type: "POST", url: URL_CART_LIST, data: payload });
            if (dataRes.code_return === 1) {
                return {
                    status: 1,
                    msg: "Add to Cart Success"
                }
            } else {
                return {
                    status: -1,
                    msg: "Add to Cart Error"
                }
            }
        }
    };

    async updateStock(payload = { product_id: 0, qty: 0 }, product_data = { id: 0, in_stock: 0 }) {
        const qty = parseInt(payload.qty, 0);
        if (product_data.in_stock < qty) {
            return {
                status: 2,
                msg: "Stock insufficient"
            }
        }
        product_data.in_stock -= qty;

        const dataRes = await this.Provider.api({
            type: "PUT",
            url: `${URL_PRODUCT_LIST}/${payload.product_id}`,
            data: product_data,
            id: payload.product_id
        });

        if (dataRes.code_return === 1) {
            return {
                status: 1,
                msg: "Update Stock Success"
            }
        } else {
            return {
                status: -1,
                msg: "Update Stock Error"
            }
        }
    };

};

export default new Services();