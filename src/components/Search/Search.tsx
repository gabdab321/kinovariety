import React from 'react';
import cl from "./Search.module.scss"

const Search = () => {
    return (
        <div className={cl.search}>
            <label className={cl.search__label}>
                <input className={cl.search__input} placeholder="Пошук..."/>
            </label>


        </div>
    );
};

export default Search;