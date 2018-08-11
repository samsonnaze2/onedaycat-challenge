const assert = require('assert');
import Servcies from './services';

describe("Test Submit Payment", () => {

    it('should return 2 when credit card is full', async () => {
        const dataRes = await Servcies.submitPayment({
            credit_card_no: "2222-2222-2222-2222"
        });
        assert.equal(dataRes.status, 2);
    });

    it('should return 3 when submit empty cart and correct credit card', async () => {
        const dataRes = await Servcies.submitPayment({
            credit_card_no: "4242-4242-4242-4242",
            cart_list: []
        });
        assert.equal(dataRes.status, 3);
    });

    it('should return 4 when empty input credit card', async () => {
        const dataRes = await Servcies.submitPayment({
            credit_card_no: ""
        });
        assert.equal(dataRes.status, 4);
    });

});