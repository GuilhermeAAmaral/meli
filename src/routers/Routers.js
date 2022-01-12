import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from '../pages/homePage/HomePage'
import ItemsPage from '../pages/itemsPage/ItemsPage'
import DetailItemsPage from '../pages/detailItemsPage/DetailItemsPage'

import GlobalState from '../global/GlobalState'

const Router = () => {

    return (

        <BrowserRouter>
            <GlobalState>
                <Switch>

                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route exact path="/items">
                        <ItemsPage />
                    </Route>

                    <Route exact path="/items/:id">
                        <DetailItemsPage />
                    </Route>
            </Switch>
            </GlobalState>
            
        </BrowserRouter>

    )
}

export default Router