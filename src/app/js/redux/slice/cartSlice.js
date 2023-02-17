import { createSlice } from "@reduxjs/toolkit";

//import {useSelector } from "react-redux";
//import { fetchProducts, STATUSES } from "../redux/slice/productSlice";

//const {data:productList} = useSelector((state) => state.product )


const initialState = { 
    cartItems: [],
    items : {},
    totalQty: 0,
    totalPrice: 0,

 }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart : (state, action) => {
            let find = state.cartItems.findIndex((item)=> item.id === action.payload.id);
            if ( find>= 0 ) {
                state.cartItems[find].quantity += 1;
            } else {
                state.cartItems.push(action.payload)
            }
        },

        getCartTotal: (state) => {
            let { totalQty, totalPrice } = state.cartItems.reduce(
              (cartTotal, cartItem) => {
                //console.log("carttotal", cartTotal);
                //console.log("cartitem", cartItem);
                const { price, quantity } = cartItem;
                //console.log(price, quantity);
                const itemTotal = price * quantity;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQty += quantity;
                return cartTotal;
              },
              {
                totalPrice: 0,
                totalQty: 0,
              }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQty = totalQty;
          },

          removeItem: (state, action) => {
            console.log('remove items', action.payload );
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
          },

          increaseItemQuantity: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
              if (item.id === action.payload) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            });
          },

          decreaseItemQuantity: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
              if (item.id === action.payload) { 
                if (item.quantity>1) {
                  return { ...item, quantity: item.quantity - 1 };
                }
                
              }
              return item;
            });
          },
    },
})


export const { addToCart, getCartTotal, increaseItemQuantity, decreaseItemQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;