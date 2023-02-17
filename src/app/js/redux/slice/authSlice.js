import {createSlice} from '@reduxjs/toolkit';
import { registerUser, userLogin } from '../action/authActions';


const initialState = {
    loading: false,
    userInfo: {}, // for user object
    //userToken: null, // for storing the JWT
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

      logout: (state) => {
         localStorage.clear();
       },
      
    },
    extraReducers: {
         
         // login user
         [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
         },
         [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            //state.userToken = payload.userToken
         },
         [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
         },


         // register user
         [registerUser.pending] : (state) => {
            state.loading = true
            state.error = null
         },

         [registerUser.fulfilled] : (state, { payload }) => {
            state.loading = false
            state.success = true // registration successful
         },

         [registerUser.rejected] : (state, { payload }) => {
            state.loading = false
            state.error = payload
         },
    },
})

export const {logout} = authSlice.actions;

export default authSlice.reducer;
