import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as TbIcons from 'react-icons/tb'

/*
    Exports const that contains params for links inside Sidebar component
*/

export const SidebarData = [
    {
        title: 'Додому',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-item'
    },
    {
        title: 'Фільми',
        path: '/films',
        icon: <BsIcons.BsFilm />,
        cName: 'nav-item'
    },
    {
        title: 'Серіали',
        path: '/series',
        icon: <TbIcons.TbLayoutList />,
        cName: 'nav-item'
    },
];