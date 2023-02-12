import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import productReducer from "./slice/productSlice";

export default configureStore ({
    reducer: {
        auth: authReducer,
        product: productReducer
    }
});