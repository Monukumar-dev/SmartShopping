import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getProductsById } from "../action/productAction";
import { STATUS } from "../../constants/Status";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },

    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload;
        // },

        // setStatus(state, action) {
        //     state.status = action.payload;
        // },
    },
    extraReducers: (builder) => {
      //getAllProducts
        builder
          .addCase(getAllProducts.pending, (state, action) => {
            state.status = STATUS.LOADING;
          })
          .addCase(getAllProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUS.IDLE;
          })
          .addCase(getAllProducts.rejected, (state, action) => {
            state.status = STATUS.ERROR;
          });

          //getProductsById
          builder
          .addCase(getProductsById.pending, (state, action) => {
            state.status = STATUS.LOADING;
          })
          .addCase(getProductsById.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUS.IDLE;
          })
          .addCase(getProductsById.rejected, (state, action) => {
            state.status = STATUS.ERROR;
          });
   
      },

})
//console.log(productSlice);
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;