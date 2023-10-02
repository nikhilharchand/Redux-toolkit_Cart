import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products.jsx'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import Cart from './components/Cart.jsx'
import Dashboard from './components/Dashboard.jsx'
import Rootlayout from './components/Rootlayout.jsx';
 

function App() {
    const router=createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Rootlayout/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
      </Route>
    ))

  return (
    <div className='App'>
    
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
