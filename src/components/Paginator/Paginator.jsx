import React, {useState} from 'react';
import {Spinner} from "reactstrap";

const Paginator = ({totalUsers, countUsers, currentPage, changePage, isLoading, portionPage = 10}) => {
    let pageCount = Math.ceil(totalUsers / countUsers);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let countPortion = Math.ceil(pageCount / portionPage);
    const [currentPortion, setCurrentPortion] = useState(1);
    let leftPage = (currentPortion - 1) * portionPage + 1;
    let rightPage = currentPortion * portionPage;
    return (
        <div className='d-flex justify-content-center mt-2'>
            {currentPortion > 1 && <button className='bg-transparent border-0'
                                           onClick={() => setCurrentPortion(currentPortion - 1)}>🡄</button>}
            {pages.filter((p) => p >= leftPage && p <= rightPage).map((page) => (
                    <div>

                            <span
                                key={page.id}
                                className={currentPage === page ? 'cursor-pointer font-weight-bold mr-2' : 'mr-2 cursor-pointer'}
                                onClick={() => {
                                    changePage(page)
                                }}
                            >
                    {currentPage === page && isLoading ? <Spinner size='sm'/> : <span>{page}</span>}
                </span>
                    </div>
                )
            )}
            {countPortion > currentPortion &&
            <button className='bg-transparent border-0'
                    onClick={() => setCurrentPortion(currentPortion + 1)}>🡆</button>}
        </div>
    )
};

export default Paginator;
