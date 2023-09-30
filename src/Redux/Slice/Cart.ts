import { createSlice,  PayloadAction, current } from "@reduxjs/toolkit";
import { productCart } from "../../Types/Project.types";
import swal from "sweetalert";



const initialState: productCart[] = []



const Cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<productCart>) => {
      return [...state, action.payload]

    },

    plusCount: (state, action: PayloadAction<number>) => {
      const prevProducts = [...current(state)];
      const newProducts = prevProducts.map(product => {
        if (product.id === action.payload) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      });
      return newProducts;
    },
    minusCount: (state, action: PayloadAction<number>) => {
      const prevProducts = [...current(state)];

      const newProducts = prevProducts.map(product => {

        if (product.id === action.payload) {
          if (product.count < 2) {
            swal({
              title: 'The minimum number of shoes to buy is 1',
              icon: 'error',
              buttons: 'ok' as any
            })
          }



          else {
            return { ...product, count: product.count - 1 };
          }

        }
        return product;
      });
      return newProducts;
    },
    removeProduct: (state, action) => {
      const prevProducts = [...current(state)];
      const newState=prevProducts.filter(product=>{
        return product.id !== action.payload
      })
      return newState
      
    }

  }



},

);

export default Cartslice.reducer;
export const { addToCart, plusCount, minusCount, removeProduct } = Cartslice.actions








