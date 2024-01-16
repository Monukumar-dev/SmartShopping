import { createSlice,current } from "@reduxjs/toolkit";


const initialState = {
    addresses: JSON.parse(localStorage.getItem('AddressList')) ?? [],
    selectedAddress: null,
    loading: false,
    error: null,
}


const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
          startLoading: (state) => {
            state.loading = true;
          },
          stopLoading: (state) => {
            state.loading = false;
          },
          addAddress: (state, action) => {
            state.addresses.push(action.payload);
            localStorage.setItem('AddressList', JSON.stringify(state.addresses))
            console.log(action.payload, "Address Added via Slice");
          },
          deleteAddress: (state, action) => {
            const newAddresses = state.addresses.filter((address) => address.id !== action.payload.id);
            // const newAdd = state.addresses.filter((address) => 
            // address.id !== action.payload.id);
            //state.addresses.push(newAdd);
            //localStorage.setItem('AddressList', JSON.stringify(state.addresses))
            // console.log(action.payload, "Address Added via Slice");
          },
          setAddressList: (state, action) => {
            state.addresses = action.payload;
          },
          setSelectedAddress: (state, action) => {
            state.selectedAddress = action.payload;
          },
          setError: (state, action) => {
            state.error = action.payload;
          },
    },
});

export const {
    startLoading,
    stopLoading,
    addAddress,
    deleteAddress,
    setAddressList,
    setSelectedAddress,
    setError
    } = addressSlice.actions

export const selectAddresses = (state) => state.address.addresses;
export const selectSelectedAddress = (state) => state.address.selectedAddress;
export const selectLoading = (state) => state.address.loading;
export const selectError = (state) => state.address.error;

export default addressSlice.reducer;