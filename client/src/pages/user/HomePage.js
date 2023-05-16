import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Home from '../../components/user/Home'

function HomePage() {
  return (
    <>
    <Navbar role="user"/>
    <Home/>
    <Footer/>
    </>
  )
}

export default HomePage