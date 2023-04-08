/*
    Model that describes admissible filter parameters
*/

export interface IFilter {
    page: number,
    country: string,
    genre: string
    ratingFrom: number,
    ratingTo: number,
    yearFrom: number,
    yearTo: number,
}