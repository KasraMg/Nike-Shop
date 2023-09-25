import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import { productCart } from "../../Types/Project.types";



const initialState: productCart[] = []

 

const Cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart:(state,action)=>{
        return [...state,action.payload]
        
    }
  },

   
});

export default Cartslice.reducer; 
export const { addToCart } = Cartslice.actions








 