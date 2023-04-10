import React from 'react';
import cl from "./SearchDropdown.module.scss"
import Loader from "../UI/Loader/Loader";
import {IFilmSearch} from "../../models/IFilmSearch";
import SearchItem from "../SearchItem/SearchItem";

interface SearchDropdownProps {
    films: IFilmSearch[]
    isFetching: boolean
}

/* Renders films array or Loader depends on isFetching prop. Component takes props films and isFetching.
*  films prop is an array of films that is rendered by using map method
*  isFetching prop is a boolean value depends on which Loader component renders */

const SearchDropdown = ({films, isFetching}: SearchDropdownProps) => {
    return (
        <div className={cl.dropdown}>
            {/* Firstly statement checking isFetching prop, depending on its value renders Loader or films list*/}
            {isFetching
                ?
                <Loader style={{margin: "0 auto", display: "flex"}}/>
                :
                /* Secondly statement checks length of films array. If films is not found it renders appropriate message,
                *  in this case message is "За цим запитом нічого не знайдено".
                *  If some films are found it maps over films array, renders each component as SearchItem */
                films.length === 0
                    ?
                    <div className={cl.error}>
                        За цим запитом нічого не знайдено
                    </div>
                    :
                    films.map((film: IFilmSearch) => <SearchItem key={film.filmId} film={film}/>)
            }
        </div>
    );
};

export default SearchDropdown;