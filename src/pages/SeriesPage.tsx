import React, {useState} from 'react';
import PageList from "./../components/PageList/PageList";
import {filmAPI} from "../services/filmAPI";
import {IFilter} from "../models/IFilter";
import Loader from "../components/UI/Loader/Loader";
import ErrorWarning from "../components/UI/ErrorWarning/ErrorWarning";
import Pagination from "../components/UI/Pagination/Pagination";
import {standardFilter} from "../mock/standardFilter";
import Filter from "../components/Filter/Filter";

const SeriesPage = () => {
    const [filter, setFilter] = useState<IFilter>(standardFilter)

    const {data, isFetching, isError} = filmAPI.useFetchSeriesByFilterQuery(filter)

    function handlePageChange(current: { selected: number }) {
        setFilter({...filter, page: current.selected + 1})
        window.scrollTo(0, 0)
    }

    return (
        <div className="page">
            <Filter filter={filter} setFilter={setFilter}/>

            {isFetching
                ?
                <Loader style={{margin: "30px auto"}}/>
                :
                <>
                    <PageList films={data?.items || []} />

                    <Pagination
                        selectedPage={filter.page - 1}
                        pageCount={data?.totalPages || 1}
                        onPageChange={handlePageChange}
                    />
                </>
            }
            {
                isError
                    ?
                    <ErrorWarning message="Виникла помилка" />
                    :
                    ""
            }
        </div>
    );
};

export default SeriesPage;