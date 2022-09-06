import React from 'react';
import {IFilmShort} from "../../../models/IFilmShort";
import cl from "./VerticalList.module.scss"
import VerticalListItem from "./VerticalListItem/VerticalListItem";

interface VerticalList {
    films: IFilmShort[]
}

const VerticalList = ({films}: VerticalList) => {
    return (
        <div className={cl.list}>
            {films.map(film => <VerticalListItem key={film.kinopoiskId} film={film} />)}
        </div>
    );
};

export default VerticalList;