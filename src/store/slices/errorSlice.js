import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: 'error',
    initialState: {value: ""},
    reducers: {
        setError (state,action) {
            state.value = action.payload;
        },
        hideError (state) {
            state.value = "";
        }
    }
});
const errorActions = errorSlice.actions

export {
    errorActions, errorSlice
}