import React from 'react';
import {filmAPI} from "../../services/filmAPI";
import Loader from "../../components/UI/Loader/Loader";
import List from "../../components/List/List";
import ErrorWarning from "../../components/UI/ErrorWarning/ErrorWarning";
import {useAppSelector} from "../../hooks/redux";

const HomePage = () => {
    const {currentCategory} = useAppSelector(state => state.category)
    const {data: newFilms, isLoading, isError} = filmAPI.useFetchByCategoryQuery(currentCategory)

    return (
        <div className="HomePage">
            {isError ? <ErrorWarning/> : ""}
            {isLoading && <Loader style={{margin: "40px auto"}}/>}
            {newFilms && <List films={newFilms.items}/>}
        </div>
    );
};

export default HomePage;