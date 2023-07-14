import React, { useState } from "react";
import { forgotPassword } from "../../api calls/users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function ResetEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await forgotPassword(email);

      if (response.success) {
        toast.success(response.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error(response.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      if (error.message === "500") {
        navigate("/error500");
      }
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-light-white">
      <div className="w-full p-10 mx-auto overflow-hidden bg-white border shadow-lg lg:w-1/3 lg:flex-row rounded-xl">
        <p className="">Enter your email</p>
        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full px-2 py-1 border border-gray-400"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="w-full px-2 py-1 text-lg text-white bg-sandy-beige"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ResetEmail;
