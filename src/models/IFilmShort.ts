interface Genre {
    genre: string
}

interface Country {
    country: string
}

export interface IFilmShort {
    kinopoiskId: number,
    nameRu: string,
    posterUrl: string,
    posterUrlPreview: string,
    ratingImdb: number,
    year: number,
    type: string,
    countries: Country[],
    genres: Genre[],
    description?: string,
    filmLength: string
}