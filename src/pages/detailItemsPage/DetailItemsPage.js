import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import {BASE_URL} from '../../constantes/urls'

import './styled.scss'

import Header from '../../components/header/Header'


const DetailItemsPage = () => {

    const params = useParams()

    const [detailProduct, setDetailProduct] = useState ([])
    const [pictures, setPictures] = useState([])
    const [descriptionProduct, setDescriptionProduct] = useState({})

    console.log ('aqui detalhes', detailProduct)

    useEffect(() => {

        const details = () => {

            axios.get (`${BASE_URL}/items/${params.id}`)
    
            .then ((res) => {
                console.log (res.data)
                setDetailProduct (res.data)
                setPictures (res.data.pictures[0])
            })
            .catch ((err) => {
                console.log (err.data)
            })
        }

        const description = () => {

            axios.get(`${BASE_URL}/items/${params.id}/description`)

            .then ((res) => {
                console.log ('desc', res.data)
                setDescriptionProduct (res.data)
            })

            .catch ((err) => {
                console.log (err.data)
            })
        }

       details()
       description()
    
    }, [])

    return (
        <>
            <Header />
            <main>
            <section>
                <div>
                    <img src={pictures.url} />
                </div>

                <div className='info_product'>
                        <p>{detailProduct.sold_quantity} Vendidos</p>
                        <p className='title_product'>{detailProduct.title}</p>
                        <p className='price_product'>
                            {new Intl.NumberFormat('es-AR', {
                                style: 'currency',
                                currency: 'ARS'
                            }).format(detailProduct.price)}</p>
                        <button>Comprar</button>
                </div>
            </section>

            <section className='description'>
                <div>
                    <h1>Descripción del producto</h1>
                    <p>{descriptionProduct.plain_text}</p>
                </div>
            </section>
            </main>
        </>
    )
}

export default DetailItemsPage