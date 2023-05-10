import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LoginPage from '../pages/admin/LoginPage'
import HomePage from '../pages/admin/HomePage'

function AdminRoutes() {
  return (
   <>
   <Routes>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/dashboard' element={<HomePage/>}/>
   </Routes>
   </>
  )
}

export default AdminRoutes