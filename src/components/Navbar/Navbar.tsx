import React, {useState} from 'react';
import cl from "./Navbar.module.scss"
import Search from "../Search/Search";
import Sidebar from "../UI/Sidebar/Sidebar";
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import SidebarItems from "../SidebarItems/SidebarItems";

/**
 * Responsible for search and sidebar. Rendered on every page of the whole app
 * @returns {JSX.Element} - Navbar component*/

const Navbar = () => {
    /* responsible for visibility of the sidebar */
    const [sidebar, setSidebar] = useState(false);

    /* shows sidebar */
    const showSidebar = () => setSidebar(true)
    /* closes sidebar */
    const closeSidebar = () => setSidebar(false)

    return (
        <header className={cl.header}>
            <Search />

            <Sidebar isOpen={sidebar} onClose={closeSidebar}>
                <SidebarItems/>
            </Sidebar>

            <div className={cl["navbar"]}>
                <Link to='#' className={cl["menu-bars"]}>
                    <FaIcons.FaBars data-testid="btn-open" style={{ color: '#fff' }} onClick={showSidebar} />
                </Link>
            </div>
        </header>
    );
};

export default Navbar;