import {configureStore} from "@reduxjs/toolkit"
import {authSlice} from './store/authSlice'
import {productSlice} from "./store/productSlice"
import {ordersSlice }from "./store/ordersSlice"


export default  configureStore({
        reducer:{  
        user:authSlice.reducer,
        product:productSlice.reducer,
        orders:ordersSlice.reducer,
    }
    })
