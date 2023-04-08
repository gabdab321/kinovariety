import React, {useState} from 'react';
import cl from "./Navbar.module.scss"
import Search from "../Search/Search";
import Sidebar from "../UI/Sidebar/Sidebar";
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import SidebarItems from "../SidebarItems/SidebarItems";

/*
    Navbar component is responsible for search and open sidebar functions. It does not has complicated logic, only
    simple state that describes sidebar visibility and handler functions for it.
*/

const Navbar = () => {
    // state that is responsible for sidebar visibility
    const [sidebar, setSidebar] = useState(false);

    // this functions is designed to show and hide sidebar(changing sidebar state)
    const showSidebar = () => setSidebar(true);
    const closeSidebar = () => setSidebar(false)

    return (
        <header className={cl.header}>
            <Search />

            <Sidebar isOpen={sidebar} onClose={closeSidebar}>
                <SidebarItems/>
            </Sidebar>

            <div className={cl["navbar"]}>
                <Link to='#' className={cl["menu-bars"]}>
                    <FaIcons.FaBars style={{ color: '#fff' }} onClick={showSidebar} />
                </Link>
            </div>
        </header>
    );
};

export default Navbar;