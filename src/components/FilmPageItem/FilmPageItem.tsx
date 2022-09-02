import React from 'react';
import {IFilmFull} from "../../models/IFilmFull";
import cl from "./FilmPageItem.module.scss"
import {transformArrayToStr} from "../../utils/transformArrayToStr";
import {getAgeLimit} from "../../utils/getAgeLimit";
import {Link} from "react-router-dom";
import FilmPlayer from "../FilmPlayer/FilmPlayer";

interface FilmPageItemProps {
    film: IFilmFull
}

const FilmPageItem = ({film}: FilmPageItemProps) => {
    return (
        <div className={cl.item}>
            <h1 className={cl.item__title}>{film.nameRu || "Немає назви"}</h1>
            <h3 className={cl.item__subtitle}>{film.nameOriginal || film.nameEn || "Немає назви"}</h3>

            <div className={cl.item__info_container}>
                <img className={cl.item__poster} src={film.posterUrlPreview} alt=""/>

                <ul className={cl.item__film_about}>
                    <li className={cl.item__about_item}><span>Рейтинг: </span> {film.ratingImdb || "Немає інформації про рейтинг"}</li>
                    <li className={cl.item__about_item}><span>Слоган: </span> {film.slogan ? `«${film.slogan}»` : "Немає слогану"}</li>
                    <li className={cl.item__about_item}><span>Рік виходу: </span> {film.year || "Немає інформації"}</li>
                    <li className={cl.item__about_item}><span>Країни: </span> {transformArrayToStr("country", film.countries) || "Немає інформації"}</li>
                    <li className={cl.item__about_item}><span>Жанри: </span> {transformArrayToStr("genre", film.genres) || "Немає інформації"}</li>
                    <li className={cl.item__about_item}><span>Вікові обмеження: </span> {getAgeLimit(film.ratingAgeLimits)  || "Немає інформації"}</li>
                    <li className={cl.item__about_item}><span>Тривалість фільму: </span> {film.filmLength ? `${film.filmLength} хвилин` : "Немає інформації"}</li>
                </ul>
            </div>

            <h2 className={cl.item__description_title}>Опис фільму</h2>
            <p className={cl.item__description}>{film.description  || "Немає опису"}</p>

            <FilmPlayer id={film.kinopoiskId}/>
        </div>
    );
};

export default FilmPageItem;