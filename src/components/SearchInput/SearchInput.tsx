import React, {useEffect, useState} from 'react';
import cl from "./SearchInput.module.scss";
import {useAppDispatch} from "../../hooks/redux";
import {setQuery as setQueryDispatch} from "../../store/reducers/querySlice";
import useDebounce from "../../hooks/useDebounce";

/* This is an input component. Component is used for changing query line and dispatching it to the redux store */

const SearchInput = () => {
    const dispatch = useAppDispatch()

    /* state query is responsible for what user enters at input. it is used to further dispatch it to the redux store. */
    const [query, setQuery] = useState<string>("")
    /* query state but with debounce. debounce here is for upgrading performance by reducing amount of unnecessary API requests */
    const debouncedQuery = useDebounce<string>(query, 400)

    /* It is an onChange event handler function. Used to change query state depending on input value */
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value)
    }

    /* This useEffect triggers on every change of debounceQuery value */
    useEffect(() => {
        /* Dispatches user`s query to the redux store */
        dispatch(setQueryDispatch(debouncedQuery))
    }, [debouncedQuery])

    return (
        <label className={cl.search__label}>
            <input
                value={query}
                onChange={handleChange}
                className={cl.search__input}
                placeholder="Пошук..."
            />
        </label>
    );
};

export default SearchInput;