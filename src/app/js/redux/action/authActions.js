import { createAsyncThunk } from "@reduxjs/toolkit"
import * as url from '../../utils/Url';
import axios from "axios";

const baseURL = "https://easyshop.webiknows.in/api";

export const registerUser = createAsyncThunk(
    'auth/resister',
    async ({name, email, password, password_confirmation, tc}, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                  },
            }
           await axios.post(`${baseURL}${url.REGISTER}`, {name, email, password, password_confirmation, tc}, config)
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
            const {data} = await axios.post(`${baseURL}${url.LOGIN}`, {email, password}, config)
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