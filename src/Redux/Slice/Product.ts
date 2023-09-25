import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import { product } from "../../Types/Project.types";



const initialState: product[] = []

export const getProductsFromServer = createAsyncThunk(
  "product/getProductsFromServer",
  async () => {
    return fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => data );
  }
);



const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(  getProductsFromServer.fulfilled,  (state, action) => action.payload   )
  
  },
});

export default productSlice.reducer;

















// export const removeUser = createAsyncThunk("users/removeUser", async (id) => {
//   return fetch(`https://redux-cms.iran.liara.run/api/users/${id}`, {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then((data) => data);
// }); 

//   builder.addCase(removeUser.fulfilled, (state, action) => {
    //     const newUsers = state.filter((user) => user._id !== action.payload.id);

    //     return newUsers;
    //   });