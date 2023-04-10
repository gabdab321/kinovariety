import React, {useEffect, useState} from 'react';
import cl from "./Search.module.scss"
import SearchDropdown from "../SearchDropdown/SearchDropdown";
import {filmAPI} from "../../services/filmAPI";
import {IFilmSearch} from "../../models/IFilmSearch";
import SearchInput from "../SearchInput/SearchInput";
import {useAppSelector} from "../../hooks/redux";

/*
    Component for searching films by user entered query
*/

const Search = () => {
    /* Redux state that shows user`s search query  */
    const {query} = useAppSelector(state => state.searchQuery)

    /* This API request is searching films by user entered query. API request is made with RTK Query hook.
    *  In this case request returns two values - data and isFetching.
    *  data is containing information about request and array of found films.
    *  isFetching provides information that tells us is request currently loading if it is, so value is equal to true */
    const {data, isFetching} = filmAPI.useSearchFilmsQuery(query)

    /* Films is the state that contains an array of films obtained as a result of an api request */
    const [films, setFilms] = useState<IFilmSearch[]>([])

    useEffect(() => {
        /* If API data value is not null, it sets films state to data.films */
        if (data?.films) {
            setFilms(data.films);
        }
    }, [data]);

    return (
        <div className={cl.search}>
            {/* Input element. Used for changing query value */}
            <SearchInput />

            {/* If query is not an empty string, it renders dropdown component with search results.
                Otherwise it does not renders anything */}
            {query.length === 0
                ?
                ""
                :
                /* This component is used for rendering array of films. It takes two props films and isFetching.
                *  films prop is an array of films that will be rendered.
                *  isFetching prop is an boolean value, it is defines is loader will be rendered instead of films list */
                <SearchDropdown films={films} isFetching={isFetching}/>
            }
        </div>
    );
};

export default Search;