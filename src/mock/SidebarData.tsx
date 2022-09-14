import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as TbIcons from 'react-icons/tb'

export const SidebarData = [
    {
        title: 'Додому',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Фільми',
        path: '/films',
        icon: <BsIcons.BsFilm />,
        cName: 'nav-text'
    },
    {
        title: 'Серіали',
        path: '/products',
        icon: <TbIcons.TbLayoutList />,
        cName: 'nav-text'
    },
];