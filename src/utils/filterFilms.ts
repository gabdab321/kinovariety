import {IFilmShort} from "../models/IFilmShort";

export function filterFilms(films: IFilmShort[]): IFilmShort[] {
    function check(film: IFilmShort) {
        for(let country of film.countries) {
            if(country.country === "Россия" || country.country === "СССР") {
                return false
            }
        }

        return true
    }

    return films.filter(check)
}