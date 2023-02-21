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
    extraReducers: (builder) =>  {
         
         // login user
         builder
          .addCase(userLogin.pending, (state, action) => {
            state.loading = true
            state.error = null
          })
          .addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false
            state.userInfo = action.payload
            //state.userToken = payload.userToken
          })
          .addCase(userLogin.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
          });

          // Register user
         builder
         .addCase(registerUser.pending, (state, action) => {
            state.loading = true
            state.error = null
         })
         .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false
            state.success = true // registration successful
         })
         .addCase(registerUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         });

    },
})

export const {logout} = authSlice.actions;

export default authSlice.reducer;
