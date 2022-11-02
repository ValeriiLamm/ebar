import { configureStore, } from '@reduxjs/toolkit'
import { navSlice } from './slices/navSlice'
import { errorSlice } from './slices/errorSlice'
import { listSlice } from './slices/listSlice'
import { cartSlice } from './slices/cartSlice'


const store = configureStore({
    reducer: { 
        nav: navSlice.reducer,
        error: errorSlice.reducer,
        checklist: listSlice.reducer,
        cart: cartSlice.reducer
    }
  })


export default store