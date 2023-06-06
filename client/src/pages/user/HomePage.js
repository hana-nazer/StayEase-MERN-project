import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Home from "../../components/user/Home";

function HomePage() {
  return (
    <>
      <Navbar search='true' />
      <Home />
      <Footer />
    </>
  );
}

export default HomePage;
