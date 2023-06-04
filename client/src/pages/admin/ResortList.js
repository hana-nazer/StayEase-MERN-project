import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/SideBar'
import Resorts from '../../components/admin/Resorts'
import Footer from '../../components/Footer'

function ResortList() {
  return (
   <>
    <div className="flex flex-col h-screen">
        <Navbar/>
        <div className="grid h-full grid-cols-6">
          <div className="col-span-1">
            <Sidebar role="admin" />
          </div>
          <div className="col-span-5 p-4 mt-20 mb-16 ">
            <Resorts/>
          </div>
        </div>
        <Footer />
      </div>
   </>
  )
}

export default ResortList