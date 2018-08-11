const assert = require('assert');
import Servcies from './services';

describe("Test Add to Cart", () => {

    it('should return 2 when qty < 0', async () => {
        const dataRes = await Servcies.addToCart({
            qty: -1
        });
        assert.equal(dataRes.status, 2);
    });

    it('should return 3 when qty is not number', async () => {
        const dataRes = await Servcies.addToCart({
            qty: "xxxx"
        });
        assert.equal(dataRes.status, 3);
    });

});

describe("Test Update Stock", () => {
    it('should return 2 when Stock insufficient', async () => {
        const product_data = { in_stock: 10 };
        const dataRes = await Servcies.updateStock({
            qty: 12
        }, product_data);
        assert.equal(dataRes.status, 2);
    });
});