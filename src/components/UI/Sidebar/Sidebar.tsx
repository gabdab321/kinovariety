import React from 'react';
import cl from "./Sidebar.module.scss"
import {Link} from "react-router-dom";
import * as AiIcons from "react-icons/ai";

interface SidebarProps {
    isOpen: boolean,
    onClose: () => void
    children: JSX.Element
}

/*
    Reusable UI component that renders sidebar. It takes props isOpen, onClose, children.
    isOpen is boolean value that responsible for sidebar visibility.
    onClose is function that handles sidebar close event. Basic example of its usage - set isOpen to false(close sidebar)
    children is a default React prop. It is an element that sidebar will render inside of itself.
*/

const Sidebar = ({isOpen, onClose, children}: SidebarProps) => {
    return (
        <nav className={isOpen ? [cl["nav-menu"], cl["active"]].join(" ") : cl["nav-menu"]}>
            <ul className={cl["nav-menu-items"]} onClick={onClose}>
                <li className={cl['navbar-toggle']}>
                    <Link to='#' className={cl['menu-bars']}>
                        <AiIcons.AiOutlineClose style={{color: '#fff'}}/>
                    </Link>
                </li>
                {children}
            </ul>
        </nav>
    );
};

export default Sidebar;