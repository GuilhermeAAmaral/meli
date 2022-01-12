import React from 'react'
import GlobalState from './global/GlobalState'
import Router from './routers/Routers'
import './styled/global.scss'

const App = () => {

  return (

    <>
      <GlobalState>
        <Router />
      </GlobalState>
    </>
  );
}

export default App;
