import React, {useEffect, useState} from 'react';
import cl from "./Search.module.scss"
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setQuery} from "../../store/reducers/searchQuerySlice";
import useDebounce from "../../hooks/useDebounce";
import SearchDropdown from "./SearchDropdown/SearchDropdown";

const Search = () => {
    const dispatch = useAppDispatch()
    const {query} = useAppSelector(state => state.searchQuery)

    const [userQuery, setUserQuery] = useState<string>("")
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false)

    const debouncedQuery = useDebounce<string>(userQuery, 700)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUserQuery(e.target.value)
    }

    function handleFocus() {
        setDropdownVisible(true)
    }

    function handleBlur() {
          setDropdownVisible(false)
    }

    useEffect(() => {
        dispatch(setQuery(userQuery))
    }, [debouncedQuery])

    useEffect(() => {
        setUserQuery(query)
    }, [query])

    return (
        <div className={cl.search}>
            <label className={cl.search__label}>
                <input
                    value={userQuery}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    className={cl.search__input}
                    placeholder="Пошук..."
                />
            </label>

            {userQuery.length === 0
                ?
                ""
                :
                <SearchDropdown isVisible={dropdownVisible} />
            }
        </div>
    );
};

export default Search;