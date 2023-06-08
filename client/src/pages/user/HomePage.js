import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Home from "../../components/user/Home";
import Banner from "../../components/user/Banner";
import CategoryIcons from "../../components/user/CategoryIcons";

function HomePage() {
  return (
    <>
      {/* <Navbar search="true" /> */}
      <div>
        <Banner />
        <div style={{  position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              
            }}
          >
            <CategoryIcons />
          </div>
        </div>
      </div>

      <div className="py-20 bg-white-smoke">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
