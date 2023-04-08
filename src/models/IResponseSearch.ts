import {IFilmSearch} from "./IFilmSearch";

/*
    Model that describes server response after api request with search query
*/

export interface IResponseSearch {
    keyword: string
    pagesCount: number
    films: IFilmSearch[]
}