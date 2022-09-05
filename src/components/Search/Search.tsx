import React, {useEffect, useState} from 'react';
import cl from "./Search.module.scss"
import {useAppDispatch} from "../../hooks/redux";
import {setQuery} from "../../store/reducers/searchQuerySlice";
import useDebounce from "../../hooks/useDebounce";
import SearchDropdown from "./SearchDropdown/SearchDropdown";

const Search = () => {
    const dispatch = useAppDispatch()
    const [userQuery, setUserQuery] = useState<string>("")

    const debouncedQuery = useDebounce<string>(userQuery, 700)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUserQuery(e.target.value)
    }

    useEffect(() => {
        dispatch(setQuery(userQuery))
    }, [debouncedQuery])

    return (
        <div className={cl.search}>
            <label className={cl.search__label}>
                <input
                    value={userQuery}
                    onChange={handleChange}
                    className={cl.search__input}
                    placeholder="Пошук..."
                />
            </label>

            {userQuery.length === 0
                ?
                ""
                :
                <SearchDropdown />
            }
        </div>
    );
};

export default Search;