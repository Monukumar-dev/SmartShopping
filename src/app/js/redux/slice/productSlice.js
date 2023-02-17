import { createSlice } from "@reduxjs/toolkit";


export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',

})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },

    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },

        setStatus(state, action) {
            state.status = action.payload;
        },
    }

})
//console.log(productSlice);
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;


// Thunks 
export function fetchProducts() {
    return async function fetchProductsThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));

        try {
            const res = await fetch('https://63cec9f4fdfe2764c72a860a.mockapi.io/api/products');
            const data = await res.json();
            console.log(data);
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));
            
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}