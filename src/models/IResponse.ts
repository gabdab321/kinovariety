import {IFilmShort} from "./IFilmShort";

export interface IResponse {
    total: number,
    totalPages: number,
    items: IFilmShort[],
    searchFilmsCountResult?: string
}