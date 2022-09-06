import React, {useState} from 'react';
import VerticalList from "../components/UI/VerticalList/VerticalList";
import {filmAPI} from "../services/filmAPI";
import {IFilter} from "../models/IFilter";
import Loader from "../components/UI/Loader/Loader";
import ErrorWarning from "../components/UI/ErrorWarning/ErrorWarning";
import Pagination from "../components/UI/Pagination/Pagination";

const SeriesPage = () => {
    const [page, setPage] = useState<number>(1)
    const {data, isFetching, isError} = filmAPI.useFetchSeriesByFilterQuery({page: page} as IFilter)

    function handlePageChange(current: { selected: number }) {
        setPage(current.selected + 1)
        window.scrollTo(0, 0)
    }

    return (
        <div className="page">
            {isFetching
                ?
                <Loader style={{margin: "30px auto"}}/>
                :
                <>
                    <VerticalList films={data?.items || []} />

                    <Pagination
                        selectedPage={page - 1}
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