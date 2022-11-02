import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "checklist",
    initialState: {value: []},
    reducers: {
        addToWishList (state,action) {
            state.value.push(action.payload)
        },
        removeFromWishList (state,action) {
            const newState = state.value.filter((e) => e !== action.payload)
            state.value = newState
        }
    }
})

const listActions = listSlice.actions

export {
    listSlice, listActions
}