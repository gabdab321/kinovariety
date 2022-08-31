export interface IFilmShort {
    kinopoiskId: number,
    nameRu: string,
    nameOriginal: string,
    posterUrl: string,
    posterUrlPreview: string,
    ratingImdb: number,
    year: number,
    type: string,
    countries: Array<{country: string}>,
    genres: Array<{genre: string}>,
    description?: string,
    filmLength: string
}