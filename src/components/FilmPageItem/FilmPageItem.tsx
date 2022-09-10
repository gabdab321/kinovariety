import React from 'react';
import {IFilmFull} from "../../models/IFilmFull";
import cl from "./FilmPageItem.module.scss"
import {transformArrayToStr} from "../../utils/transformArrayToStr";
import {getAgeLimit} from "../../utils/getAgeLimit";
import {filmAPI} from "../../services/filmAPI";

interface FilmPageItemProps {
    film: IFilmFull
}

const FilmPageItem = ({film}: FilmPageItemProps) => {
    const {data} = filmAPI.useFetchSeasonsQuery(film.kinopoiskId)

    return (
        <div className={cl.item}>
            <h1 className={cl.item__title}>{film.nameRu || "-"}</h1>
            <h3 className={cl.item__subtitle}>{film.nameOriginal || film.nameEn || "-"}</h3>

            <div className={cl.item__info_container}>
                <img className={cl.item__poster} src={film.posterUrlPreview} alt=""/>

                <ul className={cl.item__film_about}>
                    <li className={cl.item__about_item}><span>Рейтинг: </span> {film.ratingImdb || "-"}</li>
                    <li className={cl.item__about_item}><span>Слоган: </span> {film.slogan ? `«${film.slogan}»` : "-"}</li>
                    <li className={cl.item__about_item}><span>Рік виходу: </span> {film.year || "-"}</li>
                    <li className={cl.item__about_item}><span>Країни: </span> {film.countries ? transformArrayToStr("country", film.countries) : "-"}</li>
                    <li className={cl.item__about_item}><span>Жанри: </span> {film.genres ? transformArrayToStr("genre", film.genres) : "-"}</li>
                    <li className={cl.item__about_item}><span>Вікові обмеження: </span> {film.ratingAgeLimits ?  getAgeLimit(film.ratingAgeLimits) : "-"}</li>

                    {film.serial
                        ?
                        <li className={cl.item__about_item}><span>Тривалість серіалу: </span> {data ? `${data.total} сезонів` : "-"}</li>
                        :
                        <li className={cl.item__about_item}><span>Тривалість фільму: </span> {film.filmLength ? `${film.filmLength} хвилин` : "-"}</li>
                    }

                </ul>
            </div>

            <h2 className={cl.item__description_title}>Опис {film.serial ? "серіалу" : "фільму"}</h2>
            <p className={cl.item__description}>{film.description  || "Немає опису"}</p>
        </div>
    );
};

export default FilmPageItem;