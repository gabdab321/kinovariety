import React from 'react';
import {IFilmFull} from "../../models/IFilmFull";
import cl from "./FilmPageItem.module.scss"
import {transformArrayToStr} from "../../utils/transformArrayToStr";
import {getAgeLimit} from "../../utils/getAgeLimit";

interface FilmPageItemProps {
    film: IFilmFull
}

const FilmPageItem = ({film}: FilmPageItemProps) => {
    return (
        <div className={cl.item}>
            <h1 className={cl.item__title}>{film.nameRu}</h1>
            <h3 className={cl.item__subtitle}>{film.nameOriginal || film.nameEn}</h3>

            <div className={cl.item__info_container}>
                <img className={cl.item__poster} src={film.posterUrlPreview} alt=""/>

                <ul className={cl.item__film_about}>
                    <li className={cl.item__about_item}><span>Рейтинг: </span> {film.ratingImdb}</li>
                    <li className={cl.item__about_item}><span>Слоган: </span> «{film.slogan}»</li>
                    <li className={cl.item__about_item}><span>Рік виходу: </span> {film.year}</li>
                    <li className={cl.item__about_item}><span>Країни: </span> {transformArrayToStr("country", film.countries)}</li>
                    <li className={cl.item__about_item}><span>Жанри: </span> {transformArrayToStr("genre", film.genres)}</li>
                    <li className={cl.item__about_item}><span>Вікові обмеження: </span> {getAgeLimit(film.ratingAgeLimits)}</li>
                    <li className={cl.item__about_item}><span>Тривалість фільму: </span> {film.filmLength} хвилин</li>
                </ul>
            </div>

            <h2 className={cl.item__description_title}>Опис фільму</h2>
            <p className={cl.item__description}>{film.description}</p>
        </div>
    );
};

export default FilmPageItem;