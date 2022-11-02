import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {cart: []},
    reducers: {
        addProduct(state,action) {
            const {product,quantity} = action.payload;
            if (state.cart.some((element) => element.product._id === product._id)) {
                let newCart = state.cart.filter(element => element.product._id !== product._id)
                newCart = [...newCart, {product: product, quantity: quantity}]
                state.cart = newCart
              }
              else {
                state.cart.push({product: product, quantity: quantity})
            }
        },
        removeProduct (state,action) {
            const {product,quantity} = action.payload;
            if (quantity > 0) {
                let newCart = state.cart.filter(element => element.product._id !== product._id)
                newCart = [...newCart, {product: product, quantity: quantity}]
                state.cart = newCart
              }
              else {
                let newCart = state.cart.filter(element => element.product._id !== product._id)
                state.cart = newCart
              }
        }
    }
})

const cartActions = cartSlice.actions

export {
    cartActions, cartSlice
}