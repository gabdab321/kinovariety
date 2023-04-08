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

export const searchQuerySlice = createSlice({
    name: "searchQuery",
    initialState,
    reducers: {
        setQuery(state: SearchQueryState, action: PayloadAction<string>) {
            state.query = action.payload
        }
    }
})

export const searchQueryReducer = searchQuerySlice.reducer
export const {setQuery} = searchQuerySlice.actions