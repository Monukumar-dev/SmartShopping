import { createAsyncThunk } from "@reduxjs/toolkit"
import * as url from '../../utils/Url';
import axios from "axios";

export const registerUser = createAsyncThunk(
    'auth/resister',
    async ({name, email, password, password_confirmation, tc}, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                  },
            }
           await axios.post(`${url.API_BASE_URL}/auth/${url.REGISTER}`, {name, email, password, password_confirmation, tc}, config)
        }catch (error) {
            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }        
    } 
)

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({email, password}, {rejectWithValue}) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                'Content-Type': 'application/json',
                },
            }
            const {data} = await axios.post(`${url.BASE_URL}users/login`, {email, password}, config)
           
            //debugger;
           // const {data} = await axios.post(`${url.API_BASE_URL}auth${url.LOGIN}`, JSON.stringify({"username":email, "password":password}), config)

            localStorage.setItem('user-info', JSON.stringify(data))
            return data

        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const userLogged = createAsyncThunk(
    'auth/logged',
    async (payload, {rejectWithValue}) => {
        try {
           const isLogin =  JSON.parse(localStorage.getItem('user-info'))
           const token = isLogin.accessToken;
            //console.log(token, 'token');
            const config = {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                },
            }
            const {data} = await axios.get(`${url.BASE_URL}profile`, config)
            return data.user

        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                console.log(rejectWithValue(error.response.data.message))
            } else {
                console.log(rejectWithValue(error.message))
            }
        }
    }
)

export const userLogout = createAsyncThunk(
    'auth/logout',
    async (payload, {rejectWithValue}) => {
        try {
           const isLogin =  JSON.parse(localStorage.getItem('user-info'))
           const token = isLogin.accessToken;

           console.log(token, 'accesstoken');
             // configure header's Content-Type as JSON
            const config = {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                },
            }
            await axios.post(`${url.API_BASE_URL}${url.LOGOUT}`, payload, config)
            localStorage.clear();
            return null

        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                console.log(rejectWithValue(error.response.data.message))
            } else {
                console.log(rejectWithValue(error.message))
            }
        }
    }
)