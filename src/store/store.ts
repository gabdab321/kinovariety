import {configureStore} from "@reduxjs/toolkit";
import {filmAPI} from "../services/filmAPI";
import {categoryReducer} from "./reducers/categorySlice";

const reducer = {
    [filmAPI.reducerPath]: filmAPI.reducer,
    category: categoryReducer
}

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filmAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch