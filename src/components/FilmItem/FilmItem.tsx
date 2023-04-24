import React from 'react';
import {IFilmShort} from "../../models/IFilmShort";
import cl from "./FilmItem.module.scss"
import {Link} from "react-router-dom"
import {formatCategory} from "../../utils/formatCategory/formatCategory";

interface FilmItemProps {
    film: IFilmShort
}

/**
 * Destination of this component is to render short information about film in the lists. Component appearance can change
 * depends on film.relationType value.
 * @param film {IFilmShort} - object that contains basic information about film
 * @returns JSX.Element - FilmItem that contains cover image, title, film rating, year and its type
*/

const FilmItem = ({film}: FilmItemProps) => {
    /* joins year and type film params into one string */
    const shortInformation = `${film.year}, ${formatCategory(film.type)}`

    return (
        /* whole component is link that opens in the new tab. route of the link is dynamic and depends on films id  */
        <Link target="_blank" rel="noopener noreferrer" to={`/film/${film.kinopoiskId || film.filmId}`} className={cl.item}>
            <div className={cl.item__image_container}>
                {/* does not renders film rating if it has type "SIMILAR" */}
                {film?.relationType === "SIMILAR" ? "" : <div className={cl.item__rating}>{film.ratingImdb}</div>}
                <img className={cl.item__image} src={film.posterUrlPreview} alt="" />
            </div>

            <p className={cl.item__title}>{film.nameRu === null ? film.nameOriginal : film.nameRu}</p>

            {/* does not renders year and type of film if it has type "SIMILAR"  */}
            {film?.relationType === "SIMILAR" ? "" : <p className={cl.item__short}>{shortInformation}</p>}
        </Link>
    );
};

export default FilmItem;