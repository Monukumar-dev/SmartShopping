import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "https://63cec9f4fdfe2764c72a860a.mockapi.io/api/";


//fetching product using build in thunk on toolkit
export const getProducts = createAsyncThunk(
    'fetch/getProducts',
    async () => {
    const data = await axios.get(`${base_url}products`).then((res) => res.data);
    console.log(data, "fetch Product data");
    return data;
  });

  export const getProductsById = createAsyncThunk(
    'fetch/getProductsById',
    async ({id}) => {
    const data = await axios.get(`${base_url}products/${id}`).then((res) => res.data);
    console.log(data, "fetch Product data");
    return data;
  });