import { configureStore } from '@reduxjs/toolkit';
import productReducer from './feature/products/productSlice'

const store = configureStore({
    reducer: {
        product: productReducer
    }
})


export default store