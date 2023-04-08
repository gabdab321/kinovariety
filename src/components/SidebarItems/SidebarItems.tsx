import React from 'react';
import {SidebarData} from "../../mock/SidebarData";
import cl from "./SidebarItems.module.scss";
import {Link} from "react-router-dom";

/*
    Just component that renders array of items for sidebar. It uses .map() method and array from SidebarData mock const
    to render items.
*/

const SidebarItems = () => {
    return (
        <>
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
        </>
    );
};

export default SidebarItems;