import React from "react";
import Login from "../../components/admin/Login";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


function LoginPage() {

  return (
    <>
      <Navbar page='true' role='admin'/>
      <Login />
      <Footer />
    </>
  );
}

export default LoginPage;
