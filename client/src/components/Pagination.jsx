import React from 'react';
import './Pagination.css'


export default function Pagination({countriesPerPage, allCountries, pagination}){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul>
                {pageNumbers && pageNumbers.map((num) => (
                    <div>
                        <li className='number' key={num}>
                            <button className='pag' onClick={() => pagination(num)}>
                                {num}
                            </button>
                        </li>
                    </div>
               ))}
            </ul>
        </nav>
    );
};
