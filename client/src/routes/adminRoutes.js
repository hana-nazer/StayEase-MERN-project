import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LoginPage from '../pages/admin/LoginPage'

function AdminRoutes() {
  return (
   <>
   <Routes>
    <Route path='/login' element={<LoginPage/>}/>
   </Routes>
   </>
  )
}

export default AdminRoutes