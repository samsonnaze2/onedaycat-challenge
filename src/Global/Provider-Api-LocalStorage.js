const CONVERT_FIREBASE = {
    toIndex: data => {
        if (data === null) {
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
        return { datas: { ...data } };
    },
    toAfterSave: status => {
        if (status === 200) return { code_return: 1 }
        else return { code_return: 0 }
    }
};

class Provider {
    cutIdUrl(url, splitUrl = []) {
        if (splitUrl.length > 1) {
            delete splitUrl[splitUrl.length - 1];
            const newUrl = splitUrl.join("/");
            return newUrl.substring(0, newUrl.length - 1);
        } else {
            return url;
        }
    };

    api(options) {
        return new Promise(async (resolve, reject) => {
            let { type, url, data, id } = options;
            let dataRes;
            const splitUrl = url.split("/");
            let _data = JSON.parse(localStorage.getItem(url));
            const newUrl = this.cutIdUrl(url, splitUrl);
            switch (type) {
                case "GET":
                    dataRes = {
                        data: _data
                    }
                    dataRes.data = CONVERT_FIREBASE.toIndex(dataRes.data);
                    break;
                case "SHOW":
                    dataRes = {
                        data: _data
                    }
                    dataRes.data = CONVERT_FIREBASE.toShow(id, dataRes.data);
                    break;
                case "POST":
                    _data.push(data);
                    localStorage.setItem(url, JSON.stringify(_data));
                    dataRes = {
                        data: CONVERT_FIREBASE.toAfterSave(200)
                    }
                    break;
                case "PUT":
                    if (!id) {
                        //Empty Data
                        localStorage.setItem(url, JSON.stringify(data));
                    } else {
                        _data = JSON.parse(localStorage.getItem(newUrl));
                        _data[id] = data;
                        localStorage.setItem(newUrl, JSON.stringify(_data));
                    }
                    dataRes = {
                        data: CONVERT_FIREBASE.toAfterSave(200)
                    }
                    break;
                case "DELETE":
                    if (!id) {
                        //Empty Data
                        localStorage.setItem(url, JSON.stringify([]));
                    } else {
                        //Delete by id
                        _data = JSON.parse(localStorage.getItem(newUrl));
                        _data.splice(0, id);
                        localStorage.setItem(newUrl, JSON.stringify(_data));
                    }
                    dataRes = {
                        data: CONVERT_FIREBASE.toAfterSave(200)
                    }
                    break;
                default:
                    break;
            }
            resolve(dataRes.data);
        });
    };
};

export default new Provider();