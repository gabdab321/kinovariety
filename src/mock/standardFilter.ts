import {IFilter} from "../models/IFilter";

export const standardFilter: IFilter = {
    page: 1,
    genre: "",
    country: "",
    ratingFrom: 0,
    ratingTo: 10,
    yearFrom: 1950,
    yearTo: new Date().getFullYear()
}