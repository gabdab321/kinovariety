import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IFilmFull} from "../models/IFilmFull";
import {IResponse} from "../models/IResponse";
import {IFilter} from "../models/IFilter";
import {getCurrentYear} from "../utils/getCurrentYear/getCurrentYear";
import {API_TOKEN} from "../consts";
import {IResponseSeasons} from "../models/ISeasons";
import {IResponseSearch} from "../models/IResponseSearch";

/*
    RTK Query logic for working with API
*/

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
        getById: build.query<IFilmFull, number | string>({
            query: (id) => ({
                url: `/api/v2.2/films/${id}`
            })
        }),

        getFilms: build.query<IResponse, number>({
            query: (page= 1) => ({
                url: `/api/v2.2/films?type=FILM&page=${page}&order=NUM_VOTE`
            })
        }),

        getSeries: build.query<IResponse, number>({
            query: (page= 1) => ({
                url: `/api/v2.2/films?type=TV_SERIES&page=${page}&order=NUM_VOTE`
            })
        }),

        getShows: build.query<IResponse, number>({
            query: (page = 1) => ({
                url: `/api/v2.2/films?type=TV_SHOW&page=${page}&order=NUM_VOTE`
            })
        }),

        getFilmsByFilter: build.query<IResponse, IFilter>({
            query: (filter) => ({
                url: `/api/v2.2/films?type=FILM&order=${filter.order}&countries=${filter.country || ""}&genres=${filter.genre || ""}&ratingFrom=${filter.ratingFrom || 0}&ratingTo=${filter.ratingTo || 10}&yearFrom=${filter.yearFrom || 1960}&yearTo=${filter.yearTo || getCurrentYear()}&page=${filter.page || 1}`
            })
        }),

        getSeriesByFilter: build.query<IResponse, IFilter>({
            query: (filter) => ({
                url: `/api/v2.2/films?type=TV_SERIES&order=NUM_VOTE&countries=${filter.country || ""}&genres=${filter.genre || ""}&ratingFrom=${filter.ratingFrom || 0}&ratingTo=${filter.ratingTo || 10}&yearFrom=${filter.yearFrom || 1960}&yearTo=${filter.yearTo || getCurrentYear()}&page=${filter.page || 1}`
            })
        }),

        getSeasons: build.query<IResponseSeasons, number>({
            query: (id) => ({
                url: `/api/v2.2/films/${id}/seasons`
            })
        }),

        searchFilms: build.query<IResponseSearch, string>({
            query: (query) => ({
                url: `/api/v2.1/films/search-by-keyword?keyword=${query}&page=1`
            })
        }),

        getSimilars: build.query<IResponse, number | string>({
            query: (id) => ({
                url: `/api/v2.2/films/${id}/similars`
            })
        })
    })
})