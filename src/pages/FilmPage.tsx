import React from 'react';
import {useParams} from "react-router-dom";
import {filmAPI} from "../services/filmAPI";
import Loader from "../components/UI/Loader/Loader";
import ErrorWarning from "../components/UI/ErrorWarning/ErrorWarning";
import FilmPageItem from "../components/FilmPageItem/FilmPageItem";

const FilmPage = () => {
    const {id} = useParams()
    const {data: film, isLoading, isError} = filmAPI.useFetchByIdQuery(id as string)


    return (
        <div>
            {isError && <ErrorWarning />}
            {isLoading && <Loader />}
            {film === undefined
                ?
                ""
                :
                <FilmPageItem film={film}/>
            }
        </div>
    );
};

export default FilmPage;