import React from 'react';
import {IFilmSearch} from "../../models/IFilmSearch";
import cl from "./SearchItem.module.scss"
import {formatCategory} from "../../utils/formatCategory/formatCategory";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {setQuery} from "../../store/reducers/querySlice";

interface SearchItemProps {
    film: IFilmSearch
}

/* Component for rendering single film item out of array of it. Takes prop film */

const SearchItem = ({film}: SearchItemProps) => {
    const dispatch = useAppDispatch()

    /* this const contains some formatted film information. idea of this string is just to make code more readable */
    const shortInformation = `${film.year}, ${formatCategory(film.type)}`

    /* This function is an onClick event handler */
    function handleClick() {
        /* click on item here causes dispatch of empty string to query state in the redux store. it was made for better UX */
        dispatch(setQuery(""))
    }

    return (
        <Link onClick={handleClick} target="_blank" to={`/film/${film.filmId}`} className={cl.item}>
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