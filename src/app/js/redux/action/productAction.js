import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const base_url = "https://63cec9f4fdfe2764c72a860a.mockapi.io/api/";


//getProducts
export const getProducts = createAsyncThunk(
    'fetch/getProducts',
    async () => {
    const data = await axios.get(`${base_url}products`).then((res) => res.data);
    //console.log(data, "fetch Product data");
    return data;
  });

//getProductsById
  export const getProductsById = createAsyncThunk(
    'fetch/getProductsById',
    async (id) => {
    const data = await axios.get(`${base_url}products/${id}`).then((res) => res.data);
    //const data = request(`${base_url}products/`).get(id);
    //console.log(data, "fetch Product data");
    return data;
  });

//getProductsByCategory
  // export const getProductsByCategory = createAsyncThunk(
  //   'fetch/getProductsByCategory',
  //   async (id) => {
  //   const data = await axios.get(`${base_url}products/${id}`).then((res) => res.data);
  //   return data;
  // });

  

  