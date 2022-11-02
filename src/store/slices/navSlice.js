import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'nav',
    initialState: {value: false},
    reducers: {
        showNav (state) {
            state.value = true;
        },
        hideNav (state) {
            state.value = false;
        },
        reverse (state) {
            state.value = !state.value
        }
    }
});
const navActions = navSlice.actions

export {
    navActions, navSlice
}