import React from 'react';
import {IFilmFull} from "../../models/IFilmFull";
import cl from "./FilmPageItem.module.scss"
import {transformArrayToStr} from "../../utils/transformArrayToStr";
import {getAgeLimit} from "../../utils/getAgeLimit";

interface FilmPageItemProps {
    film: IFilmFull
}

const FilmPageItem = ({film}: FilmPageItemProps) => {
    console.log(film)

    return (
        <div className={cl.item}>
            <h1 className={cl.item__title}>{film.nameRu}</h1>
            <h3 className={cl.item__subtitle}>{film.nameOriginal || film.nameEn}</h3>

            <div className={cl.item__posterContainer}>
                <img className={cl.item__poster} src={film.posterUrlPreview} alt=""/>
            </div>

            <ul className={cl.item__film_about}>
                <li className={cl.item__rating}>Рейтинг: {film.ratingImdb}</li>
                <li className={cl.item__slogan}>Слоган: «{film.slogan}»</li>
                <li className={cl.item__year}>Рік виходу: {film.year}</li>
                <li className={cl.item__countries}>Країни: {transformArrayToStr("country", film.countries)}</li>
                <li className={cl.item__}>Жанри: {transformArrayToStr("genre", film.genres)}</li>
                <li className={cl.item__}>Вікові обмеження: {getAgeLimit(film.ratingAgeLimits)}</li>
                <li className={cl.item__}>Тривалість фільму: {film.filmLength} хвилини</li>
            </ul>

            <h2 className={cl.item__description_title}>Опис фільму</h2>
            <p className={cl.item__description}>{film.description}</p>
        </div>
    );
};

export default FilmPageItem;