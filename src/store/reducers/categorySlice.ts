import {Categories} from "../../utils/categories";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CategoryState {
    currentCategory: string
}

const initialState: CategoryState = {
    currentCategory: Categories.FILM
}

const categorySlice = createSlice({
    name: "categorySlice",
    initialState: initialState,
    reducers: {
        setCategory(state: CategoryState, action: PayloadAction<string>) {
            state.currentCategory = action.payload
        }
    }
})

export const categoryReducer = categorySlice.reducer
export const {setCategory} = categorySlice.actions