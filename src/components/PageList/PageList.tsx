import React from 'react';
import {IFilmShort} from "../../models/IFilmShort";
import cl from "./PageList.module.scss"
import PageListItem from "./PageListItem/PageListItem";

interface PageListProps {
    films: IFilmShort[]
}

const PageList = ({films}: PageListProps) => {
    return (
        <div className={cl.list}>
            {films.map(film => <PageListItem key={film.kinopoiskId} film={film} />)}
        </div>
    );
};

export default PageList;