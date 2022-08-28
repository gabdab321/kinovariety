import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IFilmFull} from "../models/IFilmFull";
import {IResponse} from "../models/IResponse";
import {IFilter} from "../models/IFilter";
import {getCurrentYear} from "../utils/getCurrentYear";
import {API_TOKEN} from "../consts";

export const filmAPI = createApi({
    reducerPath: "filmAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://kinopoiskapiunofficial.tech",
        prepareHeaders: (headers) => {
            headers.set("X-API-KEY", API_TOKEN)
            headers.set("Content-Type", "application/json")
            headers.set("Access-Control-Allow-Origin", "*")
            return headers
        }
    }),

    endpoints: build => ({
        fetchById: build.query<IFilmFull, number>({
            query: (id) => ({
                url: `/api/v2.2/films/${id}`
            })
        }),

        fetchByCategory: build.query<IResponse, string>({
            query: (category) => ({
                url: `/api/v2.2/films?type=${category}`
            })
        }),

        fetchFilmsByFilter: build.query<IResponse, IFilter>({
            query: (filter) => ({
                url: `/api/v2.2/films?type=FILM&order=${filter.order || "RATING"}&ratingFrom=${filter.ratingFrom || 0}&ratingTo=${filter.ratingTo || 10}&yearFrom=${filter.yearFrom || 1960}&yearTo=${filter.yearTo || getCurrentYear()}&page=${filter.page || 1}`
            })
        }),

        fetchSeriesByFilter: build.query<IResponse, IFilter>({
            query: (filter) => ({
                url: `/api/v2.2/films?type=TV_SERIES&order=${filter.order || "RATING"}&ratingFrom=${filter.ratingFrom || 0}&ratingTo=${filter.ratingTo || 10}&yearFrom=${filter.yearFrom || 1960}&yearTo=${filter.yearTo || getCurrentYear()}&page=${filter.page || 1}`
            })
        }),

        fetchTVShowsByFilter: build.query<IResponse, IFilter>({
            query: (filter) => ({
                url: `/api/v2.2/films?type=TV_SHOW&order=${filter.order || "RATING"}&ratingFrom=${filter.ratingFrom || 0}&ratingTo=${filter.ratingTo || 10}&yearFrom=${filter.yearFrom || 1960}&yearTo=${filter.yearTo || getCurrentYear()}&page=${filter.page || 1}`
            })
        })
    })
})