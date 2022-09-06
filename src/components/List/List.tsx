import React from 'react';
import {IFilmShort} from "../../models/IFilmShort";
import FilmItem from "../FilmItem/FilmItem";
import cl from "./List.module.scss"
import {Link} from "react-router-dom";

interface ListProps {
    title: string
    url: string
    films: IFilmShort[]
}

//todo: make responsibility for big screens
const List = ({films, title, url}: ListProps) => {
    return (
        <div className={cl.list}>
            <div className={cl.list__container}>
                <h1 className={cl.list__title}>{title}</h1>
                <Link className={cl.list__link} to={url} >Більше...</Link>
            </div>
            {films.map(film => <FilmItem key={film.kinopoiskId} film={film} />)}
        </div>
    );
};

export default List;