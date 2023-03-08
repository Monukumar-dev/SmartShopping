import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  filter_products: [],
  all_products: [],
  //grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
      allProduct: (state, action) => {
        state.all_products.push(action.payload)
      },
      setCategoryFilter: (state, action) => {
        state.filters.category = action.payload;
      },
      setPriceFilter: (state, action) => {
        state.price = action.payload;
      },
  },
});


export const { allProduct, setCategoryFilter, setPriceFilter } = filterSlice.actions;

export default filterSlice.reducer;