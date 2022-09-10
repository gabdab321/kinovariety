import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {filmAPI} from "../services/filmAPI";
import Loader from "../components/UI/Loader/Loader";
import ErrorWarning from "../components/UI/ErrorWarning/ErrorWarning";
import FilmPageItem from "../components/FilmPageItem/FilmPageItem";
import FilmPlayer from "../components/FilmPlayer/FilmPlayer";
import {IFilmFull} from "../models/IFilmFull";

const FilmPage = () => {
    window.scrollTo(0, 0)

    const {id} = useParams()
    const {data: film, isLoading, isError} = filmAPI.useFetchByIdQuery(id as string)
    
    return (
        <div>
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
        </div>
    );
};

export default FilmPage;