import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {filmAPI} from "../services/filmAPI";
import Loader from "../components/UI/Loader/Loader";
import ErrorWarning from "../components/UI/ErrorWarning/ErrorWarning";
import FilmPageItem from "../components/FilmPageItem/FilmPageItem";
import FilmPlayer from "../components/FilmPlayer/FilmPlayer";
import {IFilmFull} from "../models/IFilmFull";
import List from "../components/List/List";

const FilmPage = () => {
    window.scrollTo(0, 0)

    const {id} = useParams()
    const {data: film, isLoading, isError} = filmAPI.useFetchByIdQuery(id as string)
    const {data: similars, isFetching: isSimilarsFetching, isError: isSimilarsError} = filmAPI.useFetchSimilarsQuery(id || "")

    return (
        <div style={{padding: "20px"}}>
            {isError && <ErrorWarning />}
            {isLoading
                ?
                <Loader />
                :
                <>
                    <FilmPageItem film={film || {} as IFilmFull}/>
                </>
            }

            <FilmPlayer id={id || ""}/>

            {isSimilarsError && <ErrorWarning message="Виникла помилка при пошуку схожих фільмів"/>}
            {isSimilarsFetching
                ?
                <Loader/>
                :
                <List title="Схожі:" films={similars?.items.slice(0, 10) || []} style={{margin: "0px auto"}}/>
            }
        </div>
    );
};

export default FilmPage;