import React from 'react';
import cl from "./Navbar.module.scss"
import {GiHamburgerMenu} from "react-icons/gi";

const Navbar = () => {

    function handleLink(e: React.MouseEvent<HTMLAnchorElement>): void {
        e.preventDefault()
    }

    return (
        <header className={cl.header}>
            <nav className={cl.header__nav}>
                <a onClick={handleLink} className={[cl.header__link, cl["selected-link"]].join(" ")} href="#">Movies</a>
                <a onClick={handleLink} className={cl.header__link} href="#">Series</a>
                <a onClick={handleLink} className={cl.header__link} href="#">TV Shows</a>
            </nav>
        </header>
    );
};

export default Navbar;