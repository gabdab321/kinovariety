import React from 'react';
import {formatCategory} from "../../../utils/formatCategory/formatCategory";
import {Link} from "react-router-dom";
import {IFilmShort} from "../../../models/IFilmShort";
import cl from "./PageListItem.module.scss"

interface PageListItemProps {
    film: IFilmShort
}

/**
 * Banner that contains short description of films
 * @param film {IFilmShort} - object with short description of the film
 * @returns JSX.Element - Clickable film banner */

const PageListItem = ({film}: PageListItemProps) => {
    /* joins year and type film params into one string */
    const shortInformation = `${film.year}, ${formatCategory(film.type)}`

    /* whole component is link that opens in the new tab. route of the link is dynamic and depends on films id  */
    return (
        <Link target="_blank" rel="noopener noreferrer" to={`/film/${film.kinopoiskId}`} className={cl.item}>
            <div className={cl.item__image_container}>
                <div className={cl.item__rating}>{film.ratingImdb}</div>
                <img className={cl.item__image} src={film.posterUrlPreview} alt="" />
            </div>

            <p className={cl.item__title}>{film.nameRu === null ? film.nameOriginal : film.nameRu}</p>
            <p className={cl.item__short}>{shortInformation}</p>
        </Link>
    );
};

export default PageListItem;