import {createSlice, PayloadAction} from "@reduxjs/toolkit";

/*
    Slice for handling data that user inputs in search input that is located at navbar
*/

interface SearchQueryState {
    query: string
}

const initialState: SearchQueryState = {
    query: ""
}

export const querySlice = createSlice({
    name: "searchQuery",
    initialState,
    reducers: {
        setQuery(state: SearchQueryState, action: PayloadAction<string>) {
            state.query = action.payload
        }
    }
})

export const searchQueryReducer = querySlice.reducer
export const {setQuery} = querySlice.actions