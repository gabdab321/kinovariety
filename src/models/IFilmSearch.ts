/*
    Model describes information about films that comes after request with query line
*/

export interface IFilmSearch {
    filmId: number,
    nameRu: string,
    nameEn: string,
    type: string,
    year: string,
    description: string
    filmLength: string
    rating: string
    posterUrl: string
    posterUrlPreview: string
}