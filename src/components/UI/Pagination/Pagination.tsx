import React from 'react';
import ReactPaginate from "react-paginate";
import cl from "./Pagination.module.scss"

interface PaginationProps {
    selectedPage: number
    pageCount: number
    onPageChange: (current: { selected: number }) => void
}

/**
 * UI component that renders functional pagination bar. Uses react-paginate library component.
 * @param onPageChange - event handler that do something when page is changed
 * @param pageCount - total amount of pages.
 * @param selectedPage - user`s selected page */

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