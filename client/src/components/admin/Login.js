import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../LoginForm";
import LoginTitle from "../LoginTitle";
import { adminLogin } from "../../api calls/admin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (formData) => {
    try {
      const response = await adminLogin(formData);
      if (response.success) {
        localStorage.setItem("admin_token", response.data);
        navigate("/admin/dashboard");
      } else {
        toast.error(response.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      if (error.message === "500") {
        navigate("/admin/error500");
      }
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
      <ToastContainer />
    </>
  );
}

export default Login;

// Mustang@123
