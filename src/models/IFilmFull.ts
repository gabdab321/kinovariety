interface Genre {
    genre: string
}

interface Country {
    country: string
}

export interface IFilmFull {
    kinopoiskId: number,
    nameRu: string,
    posterUrl: string,
    posterUrlPreview: string,
    coverUrl: string,
    ratingImdb: number,
    year: number,
    filmLength: number, //minutes
    description: string,
    shortDescription: string,
    ratingAgeLimits: string,
    countries: Country[],
    genres: Genre[],
    serial: boolean,
    completed: boolean
}