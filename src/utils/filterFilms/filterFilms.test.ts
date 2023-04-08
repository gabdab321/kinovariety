import {filterFilms} from "./filterFilms";
import {IFilmShort} from "../../models/IFilmShort";

describe("filterFilms util", () => {
    test("properly filters with two unwanted countries at the same time", () => {
        const filmList = [
            {countries: [{country: "СССР"}, {country: "Россия"}]},
            {countries: [{country: "Франция"}, {country: "Германия"}]}
        ] as IFilmShort[]
        expect(filterFilms(filmList)).toEqual([{countries: [{country: "Франция"}, {country: "Германия"}]}])
    })

    test("properly filters with no unwanted countries", () => {
        const filmList = [
            {countries: [{country: "США"}, {country: "Австралия"}]},
            {countries: [{country: "Франция"}, {country: "Германия"}]}
        ] as IFilmShort[]
        expect(filterFilms(filmList)).toEqual(filmList)
    })

    test("properly filters with one unwanted + other countries", () => {
        const filmList = [
            {countries: [{country: "США"}, {country: "Австралия"}, {country: "Россия"}]},
        ] as IFilmShort[]
        expect(filterFilms(filmList)).toEqual([])
    })
})