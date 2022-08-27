import React from 'react';
import HorizontalList from "../../components/List/List";
import {filmAPI} from "../../services/filmAPI";
import {IFilter} from "../../models/IFilter";

const HomePage = () => {
    const {data: newFilms} = filmAPI.useFetchFilmsByFilterQuery({page: 1} as IFilter)

    return (
        <div>
            {newFilms && <HorizontalList films={newFilms.items}/>}
        </div>
    );
};

export default HomePage;