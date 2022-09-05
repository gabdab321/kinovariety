import React from 'react';
import cl from "./Navbar.module.scss"
import Search from "../../Search/Search";

const Navbar = () => {
    return (
        <header className={cl.header}>
            <Search />
        </header>
    );
};

export default Navbar;