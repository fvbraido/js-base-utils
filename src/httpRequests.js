import FileSaver from 'file-saver';
const axios = require('axios');

export function setRequestConfig(url, method, data, token) {
    // default headers
    var headers = {
        'Accept': '*/*',
        'Content-Type': 'application/json',
    }
    if (token) {
        headers['Authorization'] = token
    }
    // default params
    var params = {};
    // default response type
    var responseType = 'json';
    // Config if UPLOAD request
    if (method === "UPLOAD") {
        let formData = new FormData();
        Object.entries(data).forEach(
            ([key, value]) => {
                formData.append(key, value);
            }
        );
        data = formData;
        method = "POST";
        headers = {
            'Content-Type': `multipart/form-data;`,
        }
        if (token) {
            headers['Authorization'] = token
        }
    } else if (method === "DOWNLOAD") {
    // change response type if download
        responseType = 'blob';
        method = "POST";
    } else if (method === "GET") {
        params = data;
        data = {};
    }
    // request config
    const requestConfig = {
        method,
        url,
        headers,
        data,
        params,
        responseType,
    }
    return requestConfig;
}

export const returnRequestData = async (url, method, data, reducerType, fileName, token) => {
    const requestConfig = setRequestConfig(url, method, data, token, true);
    const response = await axios(requestConfig);
    return response
}

export const downloadFromAxiosResponse = async (response, fileName) => {
    FileSaver.saveAs(response.data, fileName);
}

export const downloadFromUrl = async (url, fileName) => {
    FileSaver.saveAs(url, fileName);
}

export function stateRequestData(url, method, data, reducerType, fileName, token, loadingCallback, successCallback, errorCallback) {
    const requestConfig = setRequestConfig(url, method, data, token);
    // actual method
    loadingCallback(true);
    return async () => {
        try {
            const response = await axios(requestConfig);
            if (method === "DOWNLOAD") {
                FileSaver.saveAs(response.data, fileName);
                loadingCallback(false);
            } else {
                loadingCallback(false);
                successCallback(response);
            }
        } catch (error) {
            errorCallback(error);
            loadingCallback(false);
        }
    }
}