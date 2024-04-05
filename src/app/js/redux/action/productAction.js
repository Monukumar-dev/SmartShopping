import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../utils/Url";
const base_url = "https://63cec9f4fdfe2764c72a860a.mockapi.io/api/";


//getProducts
export const getAllProducts = createAsyncThunk(
    'fetch/getProducts',
    async () => {
    const data = await axios.get(`${API_BASE_URL}products`).then((res) => res.data);
    //console.log(data, "Fetch Product data");
    return data;
  });

//getProductsById
  export const getProductsById = createAsyncThunk(
    'fetch/getProductsById',
    async (id) => {
    const data = await axios.get(`${API_BASE_URL}products/${id}`).then((res) => res.data);
    //console.log(data, "fetch Product data");
    return data;
  });

  

  