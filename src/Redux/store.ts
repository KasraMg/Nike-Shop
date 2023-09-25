import { configureStore } from '@reduxjs/toolkit'
import productRaducer from './Slice/Product'
import cartRaducer from './Slice/Cart'
 

const store = configureStore({
  reducer: {
    product: productRaducer,
    cart: cartRaducer 
  }
})

export default store 
export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch
