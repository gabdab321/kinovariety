import React, {useEffect, useState} from 'react';
import {filmAPI} from "../../services/filmAPI";
import Loader from "../../components/UI/Loader/Loader";
import List from "../../components/List/List";
import ErrorWarning from "../../components/UI/ErrorWarning/ErrorWarning";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setCurrentFilms} from "../../store/reducers/currentFilmsSlice";
import Pagination from "../../components/UI/Pagination/Pagination";

const HomePage = () => {
    const dispatch = useAppDispatch()

    const {currentCategory} = useAppSelector(state => state.category)
    const {films} = useAppSelector(state => state.currentFilms)

    const [currentPage, setCurrentPage] = useState<number>(1)
    const {data: newFilms, isError, isLoading} = filmAPI.useFetchByCategoryQuery({ category: currentCategory, page: currentPage })

    function changePage(current: { selected: number }) {
        setCurrentPage(current.selected + 1)
        dispatch(setCurrentFilms([]))
        window.scrollTo(0, 0)
    }

    /* for render loader when user is switching categories */
    useEffect(() => {
        dispatch(setCurrentFilms(newFilms === undefined ? [] : newFilms.items))
    }, [newFilms])

    return (
        <div className="HomePage">
            {isError ? <ErrorWarning/> : ""}
            {films.length === 0 && <Loader style={{margin: "40px auto"}}/>}
            {newFilms && <List films={films}/>}
            {isLoading ? "" : <Pagination
                selectedPage={currentPage-1}
                pageCount={newFilms === undefined ? 0 : newFilms.totalPages}
                onPageChange={(current) => {changePage(current)}}
            />}
        </div>
    );
};

export default HomePage;