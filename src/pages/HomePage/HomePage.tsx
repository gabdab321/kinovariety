import React, {useEffect} from 'react';
import {filmAPI} from "../../services/filmAPI";
import Loader from "../../components/UI/Loader/Loader";
import List from "../../components/List/List";
import ErrorWarning from "../../components/UI/ErrorWarning/ErrorWarning";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setCurrentFilms} from "../../store/reducers/currentFilmsSlice";
import {IFilmShort} from "../../models/IFilmShort";

const HomePage = () => {
    const dispatch = useAppDispatch()
    const {currentCategory} = useAppSelector(state => state.category)
    const {films} = useAppSelector(state => state.currentFilms)

    const {data: newFilms, isLoading, isError} = filmAPI.useFetchByCategoryQuery(currentCategory)

    /* for render loader when user is switching categories */
    useEffect(() => {
        dispatch(setCurrentFilms(newFilms === undefined ? [] : newFilms.items))
    }, [newFilms])

    return (
        <div className="HomePage">
            {isError ? <ErrorWarning/> : ""}
            {films.length === 0 && <Loader style={{margin: "40px auto"}}/>}
            {newFilms && <List films={films}/>}
        </div>
    );
};

export default HomePage;