import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IFilmFull} from "../models/IFilmFull";
import {IResponse} from "../models/IResponse";
import {IFilter} from "../models/IFilter";
import {getCurrentYear} from "../utils/getCurrentYear";
import {API_TOKEN} from "../consts";
import {IResponseSeasons} from "../models/ISeasons";
import {IResponseSearch} from "../models/IResponseSearch";

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
        fetchById: build.query<IFilmFull, number | string>({
            query: (id) => ({
                url: `/api/v2.2/films/${id}`
            })
        }),

        fetchFilms: build.query<IResponse, number>({
            query: (page= 1) => ({
                url: `/api/v2.2/films?type=FILM&page=${page}&order=NUM_VOTE`
            })
        }),

        fetchSeries: build.query<IResponse, number>({
            query: (page= 1) => ({
                url: `/api/v2.2/films?type=TV_SERIES&page=${page}&order=NUM_VOTE`
            })
        }),

        fetchShows: build.query<IResponse, number>({
            query: (page = 1) => ({
                url: `/api/v2.2/films?type=TV_SHOW&page=${page}&order=NUM_VOTE`
            })
        }),

        fetchFilmsByFilter: build.query<IResponse, IFilter>({
            query: (filter) => ({
                url: `/api/v2.2/films?type=FILM&order=NUM_VOTE&countries=${filter.country || ""}&genres=${filter.genre || ""}&ratingFrom=${filter.ratingFrom || 0}&ratingTo=${filter.ratingTo || 10}&yearFrom=${filter.yearFrom || 1960}&yearTo=${filter.yearTo || getCurrentYear()}&page=${filter.page || 1}`
            })
        }),

        fetchSeriesByFilter: build.query<IResponse, IFilter>({
            query: (filter) => ({
                url: `/api/v2.2/films?type=TV_SERIES&order=NUM_VOTE&countries=${filter.country || ""}&genres=${filter.genre || ""}&ratingFrom=${filter.ratingFrom || 0}&ratingTo=${filter.ratingTo || 10}&yearFrom=${filter.yearFrom || 1960}&yearTo=${filter.yearTo || getCurrentYear()}&page=${filter.page || 1}`
            })
        }),

        fetchTVShowsByFilter: build.query<IResponse, IFilter>({
            query: (filter) => ({
                url: `/api/v2.2/films?type=TV_SHOW&order=${filter.order || "NUM_VOTE"}&ratingFrom=${filter.ratingFrom || 0}&ratingTo=${filter.ratingTo || 10}&yearFrom=${filter.yearFrom || 1960}&yearTo=${filter.yearTo || getCurrentYear()}&page=${filter.page || 1}`
            })
        }),

        fetchSeasons: build.query<IResponseSeasons, number>({
            query: (id) => ({
                url: `/api/v2.2/films/${id}/seasons`
            })
        }),

        searchFilms: build.query<IResponseSearch, string>({
            query: (query) => ({
                url: `/api/v2.1/films/search-by-keyword?keyword=${query}&page=1`
            })
        })
    })
})