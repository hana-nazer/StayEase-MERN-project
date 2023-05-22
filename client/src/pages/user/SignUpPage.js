import React from "react";
import SignUp from "../../components/user/SignUp";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function SignUpPage() {
  return (
    <>
      <Navbar role="user" />
      <SignUp />
      <Footer />
    </>
  );
}

export default SignUpPage;
