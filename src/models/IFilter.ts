/* enum that has all possible order values */
export enum Order {
    RATING="RATING",
    NUM_VOTE="NUM_VOTE",
    YEAR="YEAR"
}

/* Model that describes admissible filter parameters */
export interface IFilter {
    order: Order,
    page: number,
    country: string,
    genre: string
    ratingFrom: number,
    ratingTo: number,
    yearFrom: number,
    yearTo: number,
}