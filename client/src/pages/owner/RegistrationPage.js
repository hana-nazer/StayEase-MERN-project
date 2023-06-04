import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import RegistrationForm from "../../components/owner/RegistrationForm";

function RegistrationPage() {
  return (
    <div>
      <Navbar/>
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default RegistrationPage;
