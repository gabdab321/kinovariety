export interface IFilmFull {
    kinopoiskId: number,
    nameRu: string,
    nameOriginal: string,
    nameEn: string,
    type: string[],
    slogan: string,
    posterUrl: string,
    posterUrlPreview: string,
    coverUrl: string,
    ratingImdb: number,
    year: number,
    filmLength: number, //minutes
    description: string,
    shortDescription: string,
    ratingAgeLimits: string,
    countries: { country: string }[],
    genres: { genre: string }[],
    serial: boolean,
    completed: boolean
}