import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LoginPage from '../pages/admin/LoginPage'
import AdminHome from '../pages/admin/AdminHome'
import Request from '../pages/admin/Request'
import ResortDetailedView from '../pages/admin/ResortDetailedView'

function AdminRoutes() {
  return (
   <>
   <Routes>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/dashboard' element={<AdminHome/>}/>
    <Route path='/requests' element={<Request/>}/>
    <Route path="/view_resort/:resortId" element={<ResortDetailedView/>}/>
   </Routes>
   </>
  )
}

export default AdminRoutes