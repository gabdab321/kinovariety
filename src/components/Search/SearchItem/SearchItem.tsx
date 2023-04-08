import React from 'react';
import {IFilmSearch} from "../../../models/IFilmSearch";
import cl from "./SearchItem.module.scss"
import {formatCategory} from "../../../utils/formatCategory/formatCategory";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/redux";
import {setQuery} from "../../../store/reducers/searchQuerySlice";

interface SearchItemProps {
    film: IFilmSearch
}

const SearchItem = ({film}: SearchItemProps) => {
    const dispatch = useAppDispatch()
    const shortInformation = `${film.year}, ${formatCategory(film.type)}`

    function handleClick() {
        dispatch(setQuery(""))
    }

    return (
        <Link onClick={handleClick} to={`/film/${film.filmId}`} className={cl.item}>
            <div className={cl.item__image_container}>
                <img className={cl.item__image} src={film.posterUrlPreview} alt=""/>
            </div>

            <div className={cl.item__text_container}>
                <p className={cl.item__title}>{film.nameRu}</p>
                <p className={cl.item__short}>{shortInformation}</p>
            </div>
        </Link>
    );
};

export default SearchItem;