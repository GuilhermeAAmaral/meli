import React, { useState } from 'react'
import GlobalContext from './GlobalContext'

import axios from 'axios'

import { BASE_URL } from '../constantes/urls'
import { useHistory } from 'react-router-dom'
import { goToItems } from '../routers/cordinator'


const GlobalState = (props) => {


    const history = useHistory()

    const [inputSearch, setInputSearch] = useState ('')

    const [resultSearch, setResultSearch] = useState ([])

    const searchProducts = () => {

        axios.get (`${BASE_URL}/sites/MLA/search?q=:${inputSearch}`)

        .then((res) => {
            console.log ('chegou', res.data.results)
            setResultSearch (res.data.results)
            goToItems(history)
            setInputSearch ('')
        })
        .catch((err) => {
            console.log (err.data)
        })
    }

    const state = {inputSearch, setInputSearch, resultSearch}
    const setters = {}
    const requests = {searchProducts}

    return (
        <GlobalContext.Provider value ={{state, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState