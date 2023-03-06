import axios from 'axios';
import { undefinedOrNull, empty, notUndefinedAndNull } from '../utils/Validation'
//import { getToken } from './Session';

export function request(baseUrl) {
    let request = axios.create({
        baseURL: baseUrl,
        timeout: 90000,
    });



    request.interceptors.response.use(function (response) {
        if ("data" in response.data) {
            response['data'] = response.data.data;
        }
        return response;
    }, function (error) {
        var status = null;
        var data = null;
        var message = null;

        if (notUndefinedAndNull(error)) {

            if (!("response" in error)) {
                status = 'error';
                message = 'There is something wrong at our end, our superminds are on it.';
            } else if (undefinedOrNull(error.response)) {

                let code = error.code;

                if (code === 'ECONNABORTED') {
                    status = 'error';
                    message = 'There seems to be network issue';
                } else {
                    status = 'error';
                    message = "Ooops, something went wrong at our end";
                }

            } else {
                status = error.response.status;
                data = error.response.data;
                message = error.response.data.message;

                if (status === 500) {
                    if (message === "No message available") {
                        message = "Ooops, something went wrong at our end";
                    }

                } else if ("description" in data) {
                    message = data.description
                }
            }
        } else {
            message = "There seems to be an issue with your network connection";
        }

        return Promise.reject({ "status": "error", "message": message, "data": data });
    });

    //let token = getToken();

    const isLogin =  JSON.parse(localStorage.getItem('user-info'))
           const token = isLogin.token;

    if (!empty(token)) {
         request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // request.defaults.headers.common['Access-Control-Allow-Origin'] = process.env.REACT_APP_URL_ATLAS_ORIGIN;
    }
    return request;
}