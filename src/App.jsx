import { useState } from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LayoutOne from './Layouts/LayoutOne'
import UsersPage from './Pages/UsersPage'
import ProductsPage from './Pages/ProductsPage'
import BuyPage from './Pages/BuyPage'
import ConfirmPage from './Pages/ConfirmPage'
import DetailsPage from './Pages/DetailsPage'

function App() {

  const route=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/users' element={<UsersPage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/buy' element={<BuyPage/>}/>
          <Route path='/confirm' element={<ConfirmPage/>}/>
          <Route path='/details' element={<DetailsPage/>}/>

        </Route>
      </Route>

    )
  )

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App