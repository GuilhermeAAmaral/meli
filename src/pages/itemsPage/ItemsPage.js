import React, { useContext, useState } from 'react'

import './styled.scss'

import Header from '../../components/header/Header'
import GlobalContext from '../../global/GlobalContext'
import { goToItemsDetail } from '../../routers/cordinator'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import Pagination from '../../components/pagination/Pagination'

const ItemsPage = () => {

    const history = useHistory()

    const { state } = useContext(GlobalContext)

    const onClickCardDetail = (id) => {
        goToItemsDetail(history, id)
    }

    const [itensPerPage, setItensPerPage] = useState(4)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(state.resultSearch.length / itensPerPage)

    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = state.resultSearch.slice(startIndex, endIndex)

    return (
        <>
            <Header />
            <main>
                {currentItens.map (data => {
                    return (
                        <secction key={data.id} onClick={() => onClickCardDetail(data.id)}> 
                            <div className='image_product'>
                                <img src={data.thumbnail} />
                            </div>
        
                            <div className='description_product'>
                                <h1>{new Intl.NumberFormat('es-AR', {
                                        style: 'currency',
                                        currency: 'ARS'
                                    }).format(data.price)}
                                </h1>
                                <p>{data.title}</p>
                                <p>Produto: {data.attributes[2].value_name}</p>
                            </div>
        
                            <div className='locate_product'>
                                <p>{data.address.state_name}</p>
                            </div>
                        </secction>
                    )
                })}
            </main>
            <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </>
    )
}

export default ItemsPage