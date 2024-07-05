import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default LayoutOne