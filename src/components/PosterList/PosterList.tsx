import React from 'react';
import {IFilmShort} from "../../models/IFilmShort";
import FilmItem from "../FilmItem/FilmItem";
import cl from "./PosterList.module.scss"
import {Link} from "react-router-dom";

interface PosterListProps {
    title: string
    url?: string
    films: IFilmShort[]
    styles?: object
}

/**
 * Films list with short information. It can be best films of genre or best films of the country, etc.
 * @param films {IFilmShort[]} - array of films to render.
 * @param title - list title
 * @param [url] - optional url for the "more..." button, by the default equal to ""
 * @param styles - additional styles
 * @returns JSX.Element - titled list of the films and optional "more..." button */

const PosterList = ({films, title, url = "", styles}: PosterListProps) => {
    return (
        <div style={styles} className={cl.list}>
            <div className={cl.list__container}>
                <h1 className={cl.list__title}>{title}</h1>
                {url ? <Link target="_blank" rel="noopener noreferrer" className={cl.list__link} to={url} >Більше...</Link> : ""}
            </div>
            {films.map(film => <FilmItem key={film.kinopoiskId} film={film} />)}
        </div>
    );
};

export default PosterList;