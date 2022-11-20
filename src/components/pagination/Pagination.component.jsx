import React from 'react'
import "./pagination.style.css";

const Pagination = ({totalPosters , posterPerPage , paginate}) => {
    const pageNubers = [];
    console.log(totalPosters , posterPerPage)
    for(let i=1;i <= Math.ceil(totalPosters/ posterPerPage);i++){
        pageNubers.push(i);
    }

  return (
    <nav className='pagination-container'>
        <ul className='pagination'>
            {
                pageNubers.map(
                    (number)=> {
                        return <li key={number}> <a onClick={()=> paginate(number)} href="!#"> {number} </a> </li>
                    }
                )
            }
        </ul>
    </nav>
  )
}

export default Pagination