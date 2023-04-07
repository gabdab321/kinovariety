import React from 'react';
import {filmAPI} from "../services/filmAPI";
import Loader from "../components/UI/Loader/Loader";
import PosterList from "../components/PosterList/PosterList";
import ErrorWarning from "../components/UI/ErrorWarning/ErrorWarning";
import {filterFilms} from "../utils/filterFilms";

const HomePage = () => {
    const {data: films, isError : isErrorFilms} = filmAPI.useFetchFilmsQuery(2)
    const {data: series, isError: isErrorSeries} = filmAPI.useFetchSeriesQuery(1)

    return (
        <div className="HomePage">
            {isErrorFilms ? <ErrorWarning/> : ""}
            {films?.items ? <PosterList url="/films" title="Фільми" films={filterFilms(films.items).slice(0, 10)}/> : <Loader style={{margin: "40px auto"}}/>}

            {isErrorSeries ? <ErrorWarning/> : ""}
            {series?.items ? <PosterList url="/series" title="Серіали" films={filterFilms(series.items).slice(0, 10)}/> : <Loader style={{margin: "40px auto"}}/>}
        </div>
    );
};

export default HomePage;