import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../hooks/redux";
import cl from "./SearchDropdown.module.scss"
import {filmAPI} from "../../../services/filmAPI";
import Loader from "../../UI/Loader/Loader";
import {IFilmSearch} from "../../../models/IFilmSearch";
import SearchItem from "../SearchItem/SearchItem";

interface SearchDropdownProps {
    isVisible: boolean
}

const SearchDropdown = ({isVisible}: SearchDropdownProps) => {
    const {query} = useAppSelector(state => state.searchQuery)
    const {data, isFetching} = filmAPI.useSearchFilmsQuery(query)

    const [currentFilms, setCurrentFilms] = useState<IFilmSearch[]>([])

    useEffect(() => {
        setCurrentFilms([])
    }, [query])

    useEffect(() => {
        setCurrentFilms(data?.films || [])
    }, [data])

    return (
        <div hidden={!isVisible} className={cl.dropdown}>
            {currentFilms.length === 0
                ?
                ""
                :
                currentFilms.map(film => <div key={film.filmId}><SearchItem film={film}/></div>)
            }
            {isFetching
                ?
                <Loader style={{margin: "0 auto", display: "flex"}}/>
                :
                ""
            }
        </div>
    );
};

export default SearchDropdown;