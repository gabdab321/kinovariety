/*
    Model that describes short information of the film
*/

export interface IFilmShort {
    relationType?: "SIMILAR",
    filmId?: number,
    kinopoiskId: number,
    nameRu: string,
    nameOriginal: string,
    posterUrl: string,
    posterUrlPreview: string,
    ratingImdb: number,
    ratingKinopoisk: number,
    year: number,
    type: string,
    countries: Array<{country: string}>,
    genres: Array<{genre: string}>,
    description?: string,
    filmLength: string
}