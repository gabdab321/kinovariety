/*
    Describes series episode information.
*/
interface IEpisode {
    seasonNumber: number
    episodeNumber: number
    nameRu: string
    nameEn: string
    synopsis: string
    releaseDate: string
}

/*
    Describes season information.
*/
export interface ISeason {
    number: number
    episodes: IEpisode[]
}

/*
    Describes server response that contains seasons.
*/
export interface IResponseSeasons {
    total: number
    items: ISeason[]
}