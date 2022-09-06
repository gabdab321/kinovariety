import React from 'react';
import ReactPaginate from "react-paginate";
import cl from "./Pagination.module.scss"

interface PaginationProps {
    selectedPage: number
    pageCount: number
    onPageChange: (current: { selected: number }) => void
}

const Pagination = ({onPageChange, pageCount, selectedPage}: PaginationProps) => {
    return (
        <ReactPaginate
            onPageChange={onPageChange}
            pageCount={pageCount}
            forcePage={selectedPage}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            pageRangeDisplayed={1}

            containerClassName={cl.container}
            pageClassName={cl.container__page}
            nextLinkClassName={cl.container__controller}
            previousLinkClassName={cl.container__controller}
            activeClassName={cl.container__active}
            breakClassName={cl.container__break}
        />
    );
};

export default Pagination;