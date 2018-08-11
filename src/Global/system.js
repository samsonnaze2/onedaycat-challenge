export const API_TYPE = localStorage.getItem("apiType") || "FIREBASE"; //NOTE: [ FIREBASE , LOCAL_STORAGE , MEMORY ]
export const URL_CART_LIST = "onedaycat/cart_lists";
export const URL_HISTORY_LIST = "onedaycat/history_lists";
export const URL_PRODUCT_LIST = "onedaycat/product_lists";
export const INIT_PRODUCT = [{
    "id": 1,
    "name": "ชุดแมคสไปซี่ ชิกเกน เบอร์เกอร์",
    "img_url": "https://buzzebees.blob.core.windows.net/campaigns/99421-large?time=20180603015130",
    "in_stock": 10,
    "price": 112
}, {
    "id": 2,
    "name": "ชุดชีสเบอร์เกอร์",
    "img_url": "https://buzzebees.blob.core.windows.net/campaigns/99411-large?time=20180105073018",
    "in_stock": 10,
    "price": 109
}, {
    "id": 3,
    "name": "ชุดบิกแมค",
    "img_url": "https://buzzebees.blob.core.windows.net/campaigns/99409-large?time=20180105073016",
    "in_stock": 10,
    "price": 117
}, {
    "id": 4,
    "name": "ชุดดับเบิ้ลชีสเบอร์เกอร์",
    "img_url": "https://buzzebees.blob.core.windows.net/campaigns/99417-large?time=20180603015400",
    "in_stock": 10,
    "price": 177
}, {
    "id": 5,
    "name": "ชุดซามูไรเบอร์เกอร์หมู",
    "img_url": "https://buzzebees.blob.core.windows.net/campaigns/99422-large?time=20180603015247",
    "in_stock": 10,
    "price": 159
}, {
    "id": 6,
    "name": "ชุดดับเบิ้ลบิกแมค",
    "img_url": "https://buzzebees.blob.core.windows.net/campaigns/99415-large?time=20180105073023",
    "in_stock": 10,
    "price": 217
}];

export const initDataLocalStorage = () => {
    const product_list = localStorage.getItem(URL_PRODUCT_LIST);
    const history_list = localStorage.getItem(URL_HISTORY_LIST);
    const cart_list = localStorage.getItem(URL_CART_LIST);
    const apiType = localStorage.getItem("apiType");
    if (!product_list) {
        localStorage.setItem(URL_PRODUCT_LIST, JSON.stringify(INIT_PRODUCT));
    }
    if (!history_list) {
        localStorage.setItem(URL_HISTORY_LIST, "[]");
    }
    if (!cart_list) {
        localStorage.setItem(URL_CART_LIST, "[]");
    }
    if (!apiType) {
        localStorage.setItem("apiType", "FIREBASE");
    }
};