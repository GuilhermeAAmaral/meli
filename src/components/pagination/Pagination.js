import React from 'react'

import './styled.scss'

const Pagination = ({pages, setCurrentPage, currentPage}) => {

    return (

        <div className='pagination'>
            {Array.from(Array(pages), (item, index) => {
                return (
                <button 
                    style={ index === currentPage ? {backgroundColor: "white"} : null}
                    value={index} 
                    onClick={(event) => setCurrentPage(Number(event.target.value))}>
                    {index +1}
                </button>
            )})}
        </div>

    )
}

export default Pagination