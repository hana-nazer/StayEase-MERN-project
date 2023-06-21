import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import CategoryForm from "../../components/CategoryForm";
import CategoryList from "../../components/CategoryList";

function Category() {
  const currentAdmin = useSelector((state) => state.getUser.getAdmin);
  const role = currentAdmin.role;
  const name = currentAdmin.name;
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar role={role} name={name} />
        <Sidebar role="admin" />
          <div className="flex items-center justify-center w-full mt-10 lg:w-4/5">
            <CategoryForm />
          </div>
          <div className="flex items-center justify-center w-full lg:w-4/5">
            <CategoryList />
          </div>
        <Footer />
      </div>
    </>
  );
}

export default Category;
