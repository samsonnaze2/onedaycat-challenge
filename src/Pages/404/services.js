import Provider from '../../Global/Provider-Api';

class HomeModel {
    apiUrl = "";

    constructor() {
        this.Provider = new Provider({
            apiType: "FIREBASE",
        });
    };

    async getCartData() {
        const dataRes = await this.Provider.api({
            type: "GET",
            url: "onedaycat/cart_lists"
        });
        return dataRes.datas || [];
    };

    async submitPayment(payload = { user_id: 0, credit_card_no: "", create_at: "", cart_list: [] }) {
        if (payload.credit_card_no === "") {
            return {
                status: 4,
                msg: "Credit Card not allow empty."
            }
        } else if (payload.credit_card_no === "2222-2222-2222-2222") {
            return {
                status: 2,
                msg: "Your credit card is full."
            }
        } else if (payload.cart_list.length <= 0) {
            return {
                status: 3,
                msg: "Can not payment via empty cart."
            }
        } else {
            if (payload.credit_card_no === "4242-4242-4242-4242") {
                const dataRes = await this.Provider.api({
                    type: "POST",
                    url: "onedaycat/history_lists",
                    data: payload
                });
                if (dataRes.code_return === 1) {
                    await this.Provider.api({
                        type: "DELETE",
                        url: "onedaycat/cart_lists"
                    });
                    return {
                        status: 1,
                        msg: "Payment Success"
                    }
                } else {
                    return {
                        status: -1,
                        msg: "Payment Fail"
                    }
                }
            } else {
                return {
                    status: -1,
                    msg: "Payment Fail"
                }
            }
        }
    };

    getSumPrice(cart_list) {
        let result = {
            total: 0,
            discount_price: 0,
            grand_total: 0
        }
        if (cart_list.length > 0) {
            cart_list.forEach((v, i) => {
                if (v.user_id === 1) {
                    result.total += v.detail.price * v.qty;
                    result.grand_total += v.detail.price * v.qty;
                }
            });
        };
        return result;
    };
};

export default new HomeModel();