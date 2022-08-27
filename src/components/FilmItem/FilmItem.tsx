import React from 'react';
import {IFilmShort} from "../../models/IFilmShort";
import cl from "./FilmItem.module.scss"

interface FilmItemProps {
    film: IFilmShort
}

const FilmItem = ({film}: FilmItemProps) => {
    return (
        <article className={cl.item}>
            <div className={cl.item__image_container}>
                <img className={cl.item__image} src={film.posterUrlPreview} alt="" />
            </div>
            <p className={cl.item__title}>{film.nameRu}</p>
        </article>
    );
};

export default FilmItem;