import { createAsyncThunk } from "@reduxjs/toolkit"
import * as url from '../../utils/Url';
import axios from "axios";
//import { BASE_URL } from "../../utils/Url";

export const registerUser = createAsyncThunk(
    'auth/resister',
    async ({name, email, password, password_confirmation, tc}, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                  },
            }
           await axios.post(`${url.BASE_URL}${url.REGISTER}`, {name, email, password, password_confirmation, tc}, config)
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
            const {data} = await axios.post(`https://6339831366857f698fb72ce1.mockapi.io/api/user`, {email, password}, config)
            localStorage.setItem('user-info', JSON.stringify(data.id))
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
           const token = isLogin.token;

            console.log(token, 'token');
             // configure header's Content-Type as JSON
            const config = {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                },
            }
            const {data} = await axios.get(`${url.BASE_URL}/loggeduser`, config)
            //console.log(data.user, 'Acion');
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
           const token = isLogin.token;

           console.log(token, 'token');
             // configure header's Content-Type as JSON
            const config = {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                },
            }
            await axios.post(`${url.BASE_URL}${url.LOGOUT}`, payload, config)
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