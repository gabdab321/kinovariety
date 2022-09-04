import React from 'react';
import {filmAPI} from "../services/filmAPI";
import Loader from "../components/UI/Loader/Loader";
import List from "../components/List/List";
import ErrorWarning from "../components/UI/ErrorWarning/ErrorWarning";

const HomePage = () => {
    const {data, isError} = filmAPI.useFetchFilmsQuery(1)

    return (
        <>
            <div className="HomePage">
                {isError ? <ErrorWarning/> : ""}
                {data?.items ? <List films={data.items}/> : ""}
                {data?.items.length === 0 && <Loader style={{margin: "40px auto"}}/>}
            </div>
        </>
    );
};

export default HomePage;