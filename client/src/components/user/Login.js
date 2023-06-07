import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../LoginForm";
import LoginTitle from "../LoginTitle";
import { LoginUser } from "../../api calls/users";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (formData) => {
    try {
      const response = await LoginUser(formData);
      if (response.success) {
        localStorage.setItem("user_token", response.data);
        navigate("/");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div
        className="flex items-center justify-center h-screen "
        style={{ backgroundColor: "#f3f4f6" }}
      >
        <div className="w-1/3 mx-auto overflow-hidden bg-white border shadow-lg lg:flex-row rounded-xl">
          <div className="w-full px-10 py-12">
            <LoginTitle title=" Login into your account" />
            <LoginForm onSubmit={handleSubmit} />
            <p className="mt-2">
              Dont have a account{" "}
              <Link to="/signup" className="text-blue-700 underline">
                signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
