import axios from 'axios';
import { undefinedOrNull, empty, notUndefinedAndNull } from '../utils/Validation';
import * as url from '../utils/Url';
//import { getToken } from './Session';

export function request(baseUrl) {
    let request = axios.create({
        baseURL: baseUrl,
        timeout: 90000,
    });

    // Response Interceptor
    request.interceptors.response.use(
        (response) => {
            if ("data" in response.data) {
                response['data'] = response.data.data;
            }
            return response;
        },
        async (error) => {
            var status = null;
            var data = null;
            var message = null;
            const originalRequest = error.config;

            if (notUndefinedAndNull(error)) {
                if (!("response" in error)) {
                    status = 'error';
                    message = 'There is something wrong at our end, our superminds are on it.';
                } else if (undefinedOrNull(error.response)) {
                    let code = error.code;
                    if (code === 'ECONNABORTED') {
                        status = 'error';
                        message = 'There seems to be a network issue';
                    } else {
                        status = 'error';
                        message = "Ooops, something went wrong at our end";
                    }
                } else {
                    status = error.response.status;
                    data = error.response.data;
                    message = error.response.data.message;

                    // Handle 401 (Unauthorized) for token refresh
                    if (status === 401 && !originalRequest._retry) {
                        originalRequest._retry = true;
                        try {
                            const { data } = await axios.post(
                                `${url.BASE_URL}/users/refresh-token`, 
                                {}, 
                                { withCredentials: true }
                            );

                            // Update Authorization header with new access token
                            request.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`;
                            originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;

                            // Save new token to local storage
                            const userInfo = JSON.parse(localStorage.getItem('user-info')) || {};
                            userInfo.accessToken = data.accessToken;
                            localStorage.setItem('user-info', JSON.stringify(userInfo));

                            return request(originalRequest);
                        } catch (refreshError) {
                            return Promise.reject(refreshError);
                        }
                    }

                    if (status === 500 && message === "No message available") {
                        message = "Ooops, something went wrong at our end";
                    } else if ("description" in data) {
                        message = data.description;
                    }
                }
            } else {
                message = "There seems to be an issue with your network connection";
            }

            return Promise.reject({ "status": "error", "message": message, "data": data });
        }
    );

    // Retrieve token from local storage
    const isLogin = JSON.parse(localStorage.getItem('user-info'));
    const token = isLogin?.token;

    if (!empty(token)) {
        request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        //request.defaults.headers.common['Access-Control-Allow-Origin'] = process.env.REACT_APP_URL_ATLAS_ORIGIN;
    }

    return request;
}
