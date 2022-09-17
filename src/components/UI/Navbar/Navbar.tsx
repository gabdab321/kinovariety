import React from 'react';
import cl from "./Navbar.module.scss"
import Search from "../../Search/Search";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
    return (
        <header className={cl.header}>
            <Search />
            <Sidebar />
        </header>
    );
};

export default Navbar;