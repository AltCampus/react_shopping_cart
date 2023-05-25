import { createSlice } from "@reduxjs/toolkit";
import data from '../../../data.json'

const initialState = {
    products: data.products
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    // reducers: {
    //     highest: (state) => {
    //         state.products.sort((a, b) => b.price - a.price)
    //     },
    //     lowest: (state) => {
    //         state.products.sort((a, b) => a.price - b.price)
    //     }
    // }
})


export default productSlice.reducer
export const { highest, lowest } = productSlice.actions 