import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Home from "../../components/user/Home";
import Banner from "../../components/user/Banner";
import { getCurrentUser } from "../../api calls/users";
import CategoryIcons from "../../components/user/CategoryIcons";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/getUserSlice";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.getUser.getUser);
  const role = user ? user.role : null;
  const name = user ? user.name : null;

  const getUserData = async () => {
    try {
      if (localStorage.getItem("user_token")) {
        const response = await getCurrentUser();
        if (response.success) {
          dispatch(setUser(response.data));
        } else {
          navigate("/");
        }
      } else {
        navigate("/");
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (localStorage.getItem("user_token")) {
      getUserData();
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
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

        <div className="pt-20 pb-10 bg-white-smoke ">
          <Home />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
