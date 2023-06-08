import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Home from "../../components/user/Home";
import Banner from "../../components/user/Banner";
import CategoryIcons from "../../components/user/CategoryIcons";

function HomePage() {
  return (
    <>   <Navbar search="true" />

      <div>
     
        <Banner />
        <div className="relative">
          <div
            className="absolute left-0 right-0 flex items-end justify-center bottom-1/2"
            style={{ transform: "translateY(50%)" }}
          >
            <CategoryIcons />
          </div>
        </div>

        <div className="py-20 bg-white-smoke h-1/2">
          <Home />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
