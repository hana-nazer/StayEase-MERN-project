import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SignUpPage from '../../pages/owner/SignUpPage'
import Login from '../../components/owner/Login'

function OwnerRoutes() {
  return (
    <Routes>
        <Route path='signup' element={<SignUpPage/>}/>
        <Route path='login' element={<Login/>}/>
    </Routes>
  )
}

export default OwnerRoutes