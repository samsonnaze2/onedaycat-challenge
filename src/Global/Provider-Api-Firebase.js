import axios from 'axios';

export const instanceMain = axios.create({
    baseURL: "https://sammytest-f427c.firebaseio.com",
    headers: {
        'Content-Type': "application/json",
        withCredentials: true
    }
});

const CONVERT_FIREBASE = {
    toIndex: data => {
        if(data===null){
            data = {};
        };
        let new_data = [];
        let newLoop = Object.keys(data);
        if (newLoop.length > 0) {
            newLoop.forEach((v, i) => {
                if (v !== null) {
                    data[v].id = v;
                    new_data.push(data[v]);
                }
            });
            data.datas = new_data;
            return { datas: new_data };
        } else {
            return { datas: new_data };
        }
    },
    toShow: (ids, data) => {
        data.id = ids;
        return { datas: {...data } };
    },
    toAfterSave: status => {
        if (status === 200) return { code_return: 1 }
        else return { code_return: 0 }
    }
};

class Provider {
    api(options) {
        return new Promise(async function(resolve, reject) {
            let { type, url, data, id } = options;
            let dataRes;
            switch (type) {
                case "GET":
                    dataRes = await instanceMain.get(url + ".json");
                    dataRes.data = CONVERT_FIREBASE.toIndex(dataRes.data);
                    break;
                case "SHOW":
                    dataRes = await instanceMain.get(url + ".json");
                    dataRes.data = CONVERT_FIREBASE.toShow(id, dataRes.data);
                    break;
                case "POST":
                    dataRes = await instanceMain.post(url + ".json", data);
                    dataRes.data = CONVERT_FIREBASE.toAfterSave(dataRes.status);
                    break;
                case "PUT":
                    dataRes = await instanceMain.put(url + ".json", data);
                    dataRes.data = CONVERT_FIREBASE.toAfterSave(dataRes.status);
                    break;
                case "DELETE":
                    dataRes = await instanceMain.delete(url + ".json");
                    dataRes.data = CONVERT_FIREBASE.toAfterSave(dataRes.status);
                    break;
                default:
                    break;
            }
            resolve(dataRes.data);
        });
    };
};

export default new Provider();