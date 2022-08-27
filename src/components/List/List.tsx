import React from 'react';
import {IFilmShort} from "../../models/IFilmShort";
import FilmItem from "../FilmItem/FilmItem";
import cl from "./List.module.scss"

interface HorizontalListProps {
    films: IFilmShort[]
}

const List = ({films}: HorizontalListProps) => {
    return (
        <div className={cl.list}>
            {films.map(film => <FilmItem key={film.kinopoiskId} film={film} />)}
        </div>
    );
};

export default List;