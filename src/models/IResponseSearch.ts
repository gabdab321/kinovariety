import {IFilmSearch} from "./IFilmSearch";

export interface IResponseSearch {
    keyword: string
    pagesCount: number
    films: IFilmSearch[]
}