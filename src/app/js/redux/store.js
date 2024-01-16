import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import productReducer from "./slice/productSlice";
import cartReducer from "./slice/cartSlice";
import filterReducer from "./slice/filterSlice";
import wishlistReducer from "./slice/wishlistSlice";
import addressSlice from "./slice/addressSlice";

export default configureStore ({
    reducer: {
        auth: authReducer,
        product: productReducer,
        allCart: cartReducer,
        wishlist: wishlistReducer,
        filter:filterReducer,
        address:addressSlice,
    }
});