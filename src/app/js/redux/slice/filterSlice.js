import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    price: '',
    rating: 5,
    discount: 20,
    category: ''
  },
  reducers: {
      setCategoryFilter: (state, action) => {
        state.category.push(action.payload)
      },
      setPriceFilter: (state, action) => {
        state.price = action.payload;
      },
  },
});


export const { setCategoryFilter, setPriceFilter } = filterSlice.actions;

export default filterSlice.reducer;