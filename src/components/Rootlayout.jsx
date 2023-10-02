import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './NavScroll'
import { Provider } from 'react-redux'
import store from '../store/store'

const Rootlayout = () => {
  return (
    <>
    <Provider store={store}>
    <Navbar/>

    <main>
        <Outlet/>
    </main>
    </Provider>
    </>
  )
}

export default Rootlayout