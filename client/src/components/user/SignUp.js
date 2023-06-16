import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import styles from "../../stylesheets/user/signup.module.css";
import { RegisterUser } from "../../api calls/users";
import GoogleAuthButton from "../GoogleAuthButton";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateName = () => {
    if (formData.name.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError(null);
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() === "") {
      setEmailError("Email is required");
    } else if (!emailRegex.test(formData.email.trim())) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError(null);
    }
  };

  const validatePassword = () => {
    if (formData.password.trim() === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    validateName();
    validateEmail();
    validatePassword();

    if (!nameError && !emailError && !passwordError) {
      try {
        const response = await RegisterUser(formData);
        if (response.success) {
          navigate("/");
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-white-smoke ">
        <div className="container flex flex-col w-1/2 mx-auto overflow-hidden bg-white border rounded-lg shadow-lg lg:flex-row">
          {/* <div className=" md:hidden sm:hidden"> */}
          <div
              className="relative flex flex-col items-center justify-center w-full p-12 bg-center bg-no-repeat bg-cover lg:w-6/12 "
              style={{ backgroundImage: `url('images/sign-cover.png')` }}
            >
              <h1 className="text-2xl font-semibold text-white">
                Welcome back
              </h1>
              <div>
                <p className="font-medium text-white">
                  To keep connected please login
                </p>
              </div>
              <div>
                <Link
                  to="/login"
                  className="p-2 mt-5 font-semibold text-center text-white bg-opacity-50 bg-slate-200 rounded-xl"
                >
                  Sign in
                </Link>
              </div>
            </div>
          {/* </div> */}
          <div className="w-full px-12 mt-6 lg:w-96">
            <h2 className="mb-4 text-3xl font-semibold">Create account</h2>
            <p className="mb-4">
              Create your account, it's free and only take a minute
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-2 py-1 border border-gray-400"
                  name="name"
                  value={formData.name}
                  onBlur={validateName}
                  onChange={handleChange}
                />
                {nameError && <p className="text-red-700">{nameError}</p>}
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-2 py-1 border border-gray-400"
                  name="email"
                  value={formData.email}
                  onBlur={validateEmail}
                  onChange={handleChange}
                />
                {emailError && <p className="text-red-700">{emailError}</p>}
              </div>

              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-2 py-1 border border-gray-400"
                  name="password"
                  value={formData.password}
                  onBlur={validatePassword}
                  onChange={handleChange}
                />
                {passwordError && (
                  <p className="text-red-700">{passwordError}</p>
                )}
              </div>

              <div className="mt-5 mb-3">
                <button
                  className="w-full py-3 text-center text-white bg-custom-gray"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
              <div className="text-center">or</div>
              <div className="mt-2 mb-4">
                <GoogleAuthButton />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-center h-screen bg-white-smoke">
        <div className="container flex flex-col w-1/2 mx-auto overflow-hidden bg-white border rounded-lg shadow-lg lg:flex-row">
          <div
            className="relative flex flex-col items-center justify-center w-full p-12 bg-center bg-no-repeat bg-cover lg:w-6/12"
            style={{ backgroundImage: `url('images/sign-cover.png')` }}
          >
            <h1 className="text-2xl font-semibold text-white">Welcome back</h1>
            <div>
              <p className="font-medium text-white">
                To keep connected please login
              </p>
            </div>
            <div>
              <Link
                to="/login"
                className="p-2 mt-5 font-semibold text-center text-white bg-opacity-50 bg-slate-200 rounded-xl"
              >
                Sign in
              </Link>
            </div>
          </div>
          <div className="w-full px-12 mt-6 lg:w-96">
            <h2 className="mb-4 text-3xl font-semibold">Create account</h2>
            <p className="mb-4">
              Create your account, it's free and only take a minute
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-2 py-1 border border-gray-400"
                  name="name"
                  value={formData.name}
                  onBlur={validateName}
                  onChange={handleChange}
                />
                {nameError && <p className="text-red-700">{nameError}</p>}
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-2 py-1 border border-gray-400"
                  name="email"
                  value={formData.email}
                  onBlur={validateEmail}
                  onChange={handleChange}
                />
                {emailError && <p className="text-red-700">{emailError}</p>}
              </div>

              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-2 py-1 border border-gray-400"
                  name="password"
                  value={formData.password}
                  onBlur={validatePassword}
                  onChange={handleChange}
                />
                {passwordError && (
                  <p className="text-red-700">{passwordError}</p>
                )}
              </div>

              <div className="mt-5 mb-3">
                <button
                  className="w-full py-3 text-center text-white bg-custom-gray"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
              <div className="text-center">or</div>
              <div className="mt-2 mb-4">
                <GoogleAuthButton />
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default SignUp;
