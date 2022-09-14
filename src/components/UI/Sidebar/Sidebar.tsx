import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../../../mock/SidebarData';
import cl from './Sidebar.module.scss';
import { IconContext } from 'react-icons';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className={cl.navbar}>
                    <Link to='#' className={cl["menu-bars"]}>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <div className={cl.sidebar}>
                    <nav className={sidebar ? [cl["nav-menu"], cl["active"]].join(" ") : cl["nav-menu"]}>
                        <ul className={cl["nav-menu-items"]} onClick={showSidebar}>
                            <li className={cl['navbar-toggle']}>
                                <Link to='#' className={cl['menu-bars']}>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={cl[item.cName]}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </IconContext.Provider>
        </>
    );
}

export default Sidebar;