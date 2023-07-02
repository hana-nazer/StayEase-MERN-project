import React, { useState } from "react";

function ResetEmail() {
  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const onReset = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex items-center justify-center h-screen bg-light-white">
      <div className="w-full p-10 mx-auto overflow-hidden bg-white border shadow-lg lg:w-1/3 lg:flex-row rounded-xl">
        <p className="">Enter your email</p>
        <form onSubmit={onReset}>
          <div className="mt-5">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              className="w-full px-2 py-1 border border-gray-400 "
              onChange={handleEmail}
            />
          </div>

          <div className="mt-5">
            <button className="w-full px-2 py-1 text-lg text-white bg-sandy-beige">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetEmail;
