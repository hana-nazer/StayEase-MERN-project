import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import RegistrationForm from "../../components/owner/RegistrationForm";

function RegistrationPage() {
  return (
    <div>
      <Navbar title="StayEase Owner" name="owner" />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default RegistrationPage;
