import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../LoginForm";
import LoginTitle from "../LoginTitle";
import { LoginUser } from "../../api calls/users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (formData) => {
    try {
      const response = await LoginUser(formData);
      if (response.success) {
        localStorage.setItem("user_token", response.data);
        navigate("/");
      } else {
        toast.error(response.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-light-white">
        <div className="w-full px-10 pt-8 pb-6 mx-auto overflow-hidden bg-white border shadow-lg lg:w-1/3 lg:flex-row rounded-xl">
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
      <ToastContainer />
    </>
  );
}

export default Login;
