import {IFilmShort} from "../../models/IFilmShort";

/*
    This function is used to filter out unwanted results(russian or ussr films). Works with array of IFilmShort objects
    This function used on PosterLists on the main pages.
*/

export function filterFilms(films: IFilmShort[]): IFilmShort[] {
    function checkCountry(film: IFilmShort) {
        for(let country of film.countries) {
            if(country.country === "Россия" || country.country === "СССР") {
                return false
            }
        }

        return true
    }

    return films.filter(checkCountry)
}