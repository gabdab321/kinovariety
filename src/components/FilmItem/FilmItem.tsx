import React from 'react';
import {IFilmShort} from "../../models/IFilmShort";
import cl from "./FilmItem.module.scss"
import {Link} from "react-router-dom"
import {humanReadableCategory} from "../../utils/humanReadableCategory";

interface FilmItemProps {
    film: IFilmShort
}

const FilmItem = ({film}: FilmItemProps) => {
    const shortInformation = `${film.year}, ${humanReadableCategory(film.type)}`

    return (
        <Link to={`/film/${film.kinopoiskId}`} className={cl.item}>
            <div className={cl.item__image_container}>
                <div className={cl.item__rating}>{film.ratingImdb}</div>
                <img className={cl.item__image} src={film.posterUrlPreview} alt="" />
            </div>

            <p className={cl.item__title}>{film.nameRu === null ? film.nameOriginal : film.nameRu}</p>
            <p className={cl.item__short}>{shortInformation}</p>
        </Link>
    );
};

export default FilmItem;