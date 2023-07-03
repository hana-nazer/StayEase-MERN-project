import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../LoginForm";
import LoginTitle from "../LoginTitle";
import { LoginUser } from "../../api calls/users";
import "animate.css";
import "react-notifications-component/dist/theme.css";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (formData) => {
    try {
      const response = await LoginUser(formData);
      if (response.success) {
        localStorage.setItem("user_token", response.data);
        navigate("/");
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-light-white">
        <div className="w-full p-10 mx-auto overflow-hidden bg-white border shadow-lg lg:w-1/3 lg:flex-row rounded-xl">
          <LoginTitle title=" Login into your account" />
          <LoginForm onSubmit={handleSubmit} />
          <div className="flex justify-between">
            <p className="mt-2">
              Dont have a account{" "}
              <Link to="/signup" className="text-blue-700 underline">
                signup
              </Link>
            </p>
            <p className="mt-2">
              <Link to="/reset" className="text-blue-700 underline">
                Forgot password?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
