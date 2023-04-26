import {render, screen} from "@testing-library/react";
import FilmItem from "./FilmItem";
import {IFilmShort} from "../../models/IFilmShort";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom"

describe("FilmItem", () => {
    const film: IFilmShort = {
            "filmLength": "1:30",
            "kinopoiskId": 462682,
            "nameRu": "Волк с Уолл-стрит",
            "nameOriginal": "The Wolf of Wall Street",
            "countries": [
                {
                    "country": "США"
                }
            ],
            "genres": [
                {
                    "genre": "драма"
                },
                {
                    "genre": "криминал"
                },
                {
                    "genre": "биография"
                },
                {
                    "genre": "комедия"
                }
            ],
            "ratingKinopoisk": 8,
            "ratingImdb": 8.2,
            "year": 2013,
            "type": "FILM",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/462682.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/462682.jpg"
    }

    test("should properly render item", () => {
        render(<BrowserRouter> <FilmItem film={film} /> </BrowserRouter>)

        const image = screen.getByRole("img")
        const rating = screen.getByTestId("rating")
        const title = screen.getByTestId("title")
        const shortInformation = screen.getByTestId("shortInformation")

        /* image, rating, title and short information should be in the document */
        expect(image).toBeInTheDocument()
        expect(rating).toBeInTheDocument()
        expect(title).toBeInTheDocument()
        expect(shortInformation).toBeInTheDocument()
    })

    test("should properly render item with SIMILAR relationType", () => {
        const similarFilm: IFilmShort = {...film, relationType: "SIMILAR"}
        render(<BrowserRouter> <FilmItem film={similarFilm} /> </BrowserRouter>)

        const image = screen.getByRole("img")
        const title = screen.getByTestId("title")

        /* only title and image should be in the document */
        expect(image).toBeInTheDocument()
        expect(title).toBeInTheDocument()
    })
})