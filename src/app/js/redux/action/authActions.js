import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://6339831366857f698fb72ce1.mockapi.io/api/users";

export const registerUser = createAsyncThunk(
    'auth/resister',
    async ({firstName, lastName, email, password, passwordConfirm, mobile}, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                  },
            }
            await axios.post(baseURL, {firstName, lastName, email, password, passwordConfirm, mobile}, config)
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
            const {data} = await axios.get(`${baseURL}/1`, {email, password}, config)
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