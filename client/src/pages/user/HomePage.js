import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Home from "../../components/user/Home";

function HomePage() {
  return (
    <>
      <Navbar search="true" />
        <div className=" bg-white-smoke">
          <Home />
        </div>
      <Footer />
    </>
  );
}

export default HomePage;
