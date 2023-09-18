import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Slice/Cart'
 

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // icecream: icecreamReducer,
    // user: userReducer
  }
})

export default store 
export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch
