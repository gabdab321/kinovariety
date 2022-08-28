import React, {useRef} from 'react';
import {IFilmShort} from "../../models/IFilmShort";
import cl from "./FilmItem.module.scss"
import {useHover} from "../../hooks/useHover";

interface FilmItemProps {
    film: IFilmShort
}

const FilmItem = ({film}: FilmItemProps) => {
    const itemRef = useRef<HTMLElement>(null)
    const isHover = useHover(itemRef)

    const classes = isHover ? [cl.item, cl.item__hovered].join(" ") : cl.item

    return (
        <article ref={itemRef} className={classes}>
            <div className={cl.item__image_container}>
                <img className={cl.item__image} src={film.posterUrlPreview} alt="" />
            </div>
            <p className={cl.item__title}>{film.nameRu}</p>
        </article>
    );
};

export default FilmItem;