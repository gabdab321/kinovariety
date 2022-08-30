import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFilmShort} from "../../models/IFilmShort";

/* Destination of this slice is containing temporary list of films that renders at the current moment.
*  */

interface CurrentFilmsState {
    films: IFilmShort[]
}

const initialState:CurrentFilmsState = {
    films: []
}

export const currentFilmSlice = createSlice({
    name: "currentFilmSlice",
    initialState,
    reducers: {
        setCurrentFilms(state: CurrentFilmsState, action: PayloadAction<IFilmShort[]>) {
            state.films = action.payload
        }
    }
})

export const {setCurrentFilms} = currentFilmSlice.actions
export const currentFilmReducer = currentFilmSlice.reducer