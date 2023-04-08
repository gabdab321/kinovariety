import {IFilmShort} from "./IFilmShort";

/*
    Model that describes server response.
*/

export interface IResponse {
    total: number,
    totalPages: number,
    items: IFilmShort[],
    searchFilmsCountResult?: string
}