import React from "react";
import Signup from "../../components/owner/Signup";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function SignUpPage() {
  return (
    <>
      <Navbar page="signup" role="owner" />
      <Signup />
      <Footer />
    </>
  );
}

export default SignUpPage;
