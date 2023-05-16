import React from 'react'
import Login from '../../components/user/Login'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


function LoginPage() {
  return (
    <>
    <Navbar role="user"/>
    <Login/>
    <Footer/>
    </>
  )
}

export default LoginPage