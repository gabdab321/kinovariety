import React from 'react';
import cl from "./Navbar.module.scss"
import Search from "../../Search/Search";
import logo from "../../../logo.png"
import {Link} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
    //todo: hamburger menu with animation

    return (
        <header className={cl.header}>
            {/*<Link className={cl.header__home} to="/"><img className={cl.header__logo} src={logo} alt=""/></Link>*/}
            <Search />
            <Sidebar />
        </header>
    );
};

export default Navbar;