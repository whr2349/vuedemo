import axios from "axios";
// import qs from 'qs';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://127.0.0.1:7001';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';



function get(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: data
        }).then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err)
        })
    })
}

function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err)
        });
    })
}

function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

export default { get,post,patch,put }