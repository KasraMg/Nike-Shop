import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { product } from "../../Types/Project.types";



const initialState: product[] = []

export const getProductsFromServer = createAsyncThunk(
  "product/getProductsFromServer",
  async () => {
    return fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => data);
  }
);



const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    All_Products: (state) => {
      console.log(...current(state)); 
    },
    cheapest_product: (state) => {
      const prevState = [...current(state)]
      const newState = prevState.sort((a, b) => a.price.current_price - b.price.current_price)
      return newState
    },
    expensivest_product: (state) => {
      const prevState = [...current(state)]
      const newState = prevState.sort((a, b) => b.price.current_price - a.price.current_price)
      return newState
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProductsFromServer.fulfilled, (state, action) => action.payload)

  },
});

export default productSlice.reducer;
export const { All_Products, cheapest_product, expensivest_product } = productSlice.actions