import React from 'react';
import cl from "./Navbar.module.scss"
import {Categories} from "../../../utils/categories";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

const Navbar = () => {
    // const dispatch = useAppDispatch()
    // const {currentCategory} = useAppSelector(state => state.category)
    //
    // function handleLink(e: React.MouseEvent<HTMLAnchorElement>): void {
    //     if (!(e.target instanceof HTMLAnchorElement)) {
    //         return
    //     }
    //
    //     e.preventDefault()
    //     dispatch(setCategory(e.target.dataset.category as string))
    //     dispatch(setCurrentFilms([]))
    // }
    //
    // interface Anchor {
    //     category: string,
    //     text: string
    // }
    //
    // /* Creating anchor element array for comfortable highlighting of selected category */
    // const anchors: Anchor[] = [
    //     {category: Categories.FILM, text: "Фільми"},
    //     {category: Categories.TV_SERIES, text: "Серіали"},
    //     {category: Categories.TV_SHOW, text: "ТВ-Шоу"},
    // ]
    //
    // function setClasses(category: string): string {
    //     if(category === currentCategory) {
    //         return [cl.header__link, cl.selectedLink].join(" ")
    //     }
    //
    //     return cl.header__link
    // }

    return (
        <header className={cl.header}>
            <nav className={cl.header__nav}>
                {/*{anchors.map(anchor => <a*/}
                {/*    key={anchor.category}*/}
                {/*    data-category={anchor.category}*/}
                {/*    onClick={handleLink}*/}
                {/*    className={setClasses(anchor.category)}*/}
                {/*>{anchor.text}</a>)}*/}
            </nav>
        </header>
    );
};

export default Navbar;