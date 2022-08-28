import React, {useEffect, useRef} from 'react';
import cl from "./Navbar.module.scss"
import {Categories} from "../../../utils/categories";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setCategory} from "../../../store/reducers/categorySlice";

const Navbar = () => {
    const dispatch = useAppDispatch()
    const {currentCategory} = useAppSelector(state => state.category)

    const navRef = useRef<HTMLElement>(null)

    function handleLink(e: React.MouseEvent<HTMLAnchorElement>): void {
        if (!(e.target instanceof HTMLAnchorElement)) {
            return
        }

        e.preventDefault()
        dispatch(setCategory(e.target.dataset.category as string))
    }

    function setSelected() {
        if(!navRef.current) return

        const anchors = navRef.current.children as HTMLCollectionOf<HTMLElement>

        for(let i = 0; i < anchors.length; i++) {
            if(anchors[i].dataset.category === currentCategory) {
                console.log("true")
                anchors[i].className = [cl.header__link, cl.selectedLink].join(" ")
            }else {
                console.log("false")
                anchors[i].className = cl.header__link
            }
        }
    }

    useEffect(() => {
        setSelected()
    }, [currentCategory])

    /* Creating anchor element array for comfortable highlighting of selected category */
    interface Anchor {
        category: string,
        text: string
    }

    const anchors = [
        {category: Categories.FILM, },
    ]

    return (
        <header className={cl.header}>
            <nav ref={navRef} className={cl.header__nav}>
                <a data-category={Categories.FILM} onClick={handleLink} className={cl.header__link} href="#">Movies</a>
                <a data-category={Categories.TV_SERIES} onClick={handleLink} className={cl.header__link} href="#">Series</a>
                <a data-category={Categories.TV_SHOW} onClick={handleLink} className={cl.header__link} href="#">TV Shows</a>
            </nav>
        </header>
    );
};

export default Navbar;