import React from 'react';
import s from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = currentPage > 1 ? currentPage - 1 : currentPage; i <= currentPage + 6; i++) {
        pages.push(i);
    }

    return <div className={s.numbersPage}>
            {pages.map((number) => {
                return <span className={(number === currentPage) ? s.currentNumberPage : s.ordinaryNumberPage}
                             onClick={() => {
                                 onPageChange(number)
                             }}>{number}</span>
            })}
        </div>
};

export default Paginator;