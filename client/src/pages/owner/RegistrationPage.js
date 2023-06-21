import React  from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import RegistrationForm from "../../components/owner/RegistrationForm";
import { useSelector } from "react-redux";



function RegistrationPage() {
  const currentUser = useSelector((state)=>state.getUser.getOwner)
  const role = currentUser.role
  const name = currentUser.name
  
  return (
    <div>
      <Navbar role={role} name={name}/>
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default RegistrationPage;
