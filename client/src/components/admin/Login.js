import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../LoginForm";
import LoginTitle from "../LoginTitle";
import { adminLogin } from "../../api calls/admin";

function  Login() {
  const navigate = useNavigate();
  const handleSubmit = async (formData) => {
    try {
      const response = await adminLogin(formData);
      if (response.success) {
        localStorage.setItem("admin_token", response.data);
        navigate("/admin/dashboard");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen overflow-hidden">
        <div className="w-4/6 p-10 mx-auto overflow-hidden bg-white border shadow-lg md:w-1/3 rounded-xl">
            <LoginTitle title="Admin Login" />
            <LoginForm onSubmit={handleSubmit} role="admin" />
        </div>
      </div>
    </>
  );
}

export default Login;

// Mustang@123
