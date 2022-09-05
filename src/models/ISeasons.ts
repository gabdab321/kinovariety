interface IEpisode {
    seasonNumber: number
    episodeNumber: number
    nameRu: string
    nameEn: string
    synopsis: string
    releaseDate: string
}

export interface ISeason {
    number: number
    episodes: IEpisode[]
}

export interface IResponseSeasons {
    total: number
    items: ISeason[]
}