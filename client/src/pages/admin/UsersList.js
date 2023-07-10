import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import Footer from "../../components/Footer";
import AllUsersList from "../../components/admin/AllUsersList";
import { useSelector } from "react-redux";

function UsersList() {
  const currentAdmin = useSelector((state) => state.getUser.getAdmin);
  const role = currentAdmin.role;
  const name = currentAdmin.name;
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar role={role} name={name} />
        <Sidebar role="admin" />
        <div className="container w-3/4 py-10 mt-20 mb-16 ml-10 border rounded-md shadow-lg lg:w-1/2 lg:ml-64">
          <AllUsersList />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default UsersList;
