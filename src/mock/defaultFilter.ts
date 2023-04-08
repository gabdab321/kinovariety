import {IFilter} from "../models/IFilter";

/*
    Exports object that contains default params for filter
*/

export const defaultFilter: IFilter = {
    page: 1,
    genre: "",
    country: "",
    ratingFrom: 0,
    ratingTo: 10,
    yearFrom: 1950,
    yearTo: new Date().getFullYear()
}