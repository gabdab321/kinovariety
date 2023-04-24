import {IFilter} from "../models/IFilter";
import {Order} from "../models/IFilter";

/* filter that has default filter params */
export const defaultFilter: IFilter = {
    order: Order.NUM_VOTE,
    page: 1,
    genre: "",
    country: "",
    ratingFrom: 0,
    ratingTo: 10,
    yearFrom: 1900,
    yearTo: new Date().getFullYear()
}