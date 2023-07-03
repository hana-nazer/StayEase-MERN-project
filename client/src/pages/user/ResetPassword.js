import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { resetPassword } from "../../api calls/users";

function ResetPassword() {
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { id, token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === "" || confirmPassword === "") {
      setErrorMessage("Please fill in all fields");
    } else if (password === confirmPassword) {
      console.log("Password:", password);
      // Perform additional actions here, such as submitting the form or making an API call
    } else {
      setErrorMessage("Password and Confirm Password do not match");
    }

    try {
      const response = await resetPassword(password, id, token);
      if(response.success){
        navigate('/login')
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-light-white">
        <div className="w-full p-10 mx-auto overflow-hidden bg-white border shadow-lg lg:w-1/3 lg:flex-row rounded-xl">
          <p className="">Enter your email</p>
          <form onSubmit={handleSubmit}>
            <div className="mt-5">
              <input
                type="password"
                placeholder="Enter new password"
                name="password"
                className="w-full px-2 py-1 border border-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password"
                className="w-full px-2 py-1 border border-gray-400"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {errorMessage && (
              <div className="mt-5 text-red-500">{errorMessage}</div>
            )}

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
      </div>
    </>
  );
}

export default ResetPassword;
