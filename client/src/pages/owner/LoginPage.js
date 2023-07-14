import React from "react";
import Login from "../../components/owner/Login";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function LoginPage() {
  return (
    <>
      <Navbar role="owner" page="login" />
      <Login />
      <Footer />
    </>
  );
}

export default LoginPage;
