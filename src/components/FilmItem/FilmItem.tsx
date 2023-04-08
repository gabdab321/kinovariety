import React from 'react';
import {IFilmShort} from "../../models/IFilmShort";
import cl from "./FilmItem.module.scss"
import {Link} from "react-router-dom"
import {formatCategory} from "../../utils/formatCategory/formatCategory";

interface FilmItemProps {
    film: IFilmShort
}

const FilmItem = ({film}: FilmItemProps) => {
    const shortInformation = `${film.year}, ${formatCategory(film.type)}`

    return (
        <Link target="_blank" rel="noopener noreferrer" to={`/film/${film.kinopoiskId || film.filmId}`} className={cl.item}>
            <div className={cl.item__image_container}>
                {film?.relationType === "SIMILAR" ? "" : <div className={cl.item__rating}>{film.ratingImdb}</div>}
                <img className={cl.item__image} src={film.posterUrlPreview} alt="" />
            </div>

            <p className={cl.item__title}>{film.nameRu === null ? film.nameOriginal : film.nameRu}</p>

            {film?.relationType === "SIMILAR" ? "" : <p className={cl.item__short}>{shortInformation}</p>}
        </Link>
    );
};

export default FilmItem;