import React from 'react';
import {Spinner} from "reactstrap";

const Paginator = ({totalUsers, countUsers, currentPage, changePage, isLoading}) => {
    let pageCount = Math.ceil(totalUsers / countUsers);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <>
            {pages.map((page) => (
                    <span
                        key={page.id}
                        className={currentPage === page ? 'cursor-pointer font-weight-bold mr-2' : 'mr-2 cursor-pointer'}
                        onClick={(e) => {
                            changePage(page)
                        }}
                    >
                    {currentPage === page && isLoading ? <Spinner size='sm'/> : <span>{page}</span>}
                </span>
                )
            )}
        </>

    )
};

export default Paginator;
