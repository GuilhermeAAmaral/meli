import React, { useContext } from 'react'

import './styled.scss'

import logo from '../../image/logo.png'
import { FaSistrix } from "react-icons/fa"

import GlobalContext from '../../global/GlobalContext'


const Header = () => {

    const {requests, state} = useContext(GlobalContext)

    const onChangeInputSearch = (event) => {
        state.setInputSearch (event.target.value)
    }

    return (

        <header>
            <div className='container_logo'>
                <img src={logo} alt="Logo Mercado Livre" />
            </div>
            
            <div className='container_input'>
                <input 
                    placeholder='Nunca dejes de buscar'
                    onChange={onChangeInputSearch}
                    value={state.inputSearch}
                />

                <button onClick={requests.searchProducts}>
                    <FaSistrix /> 
                </button>
            </div>
        </header>
    )
}

export default Header