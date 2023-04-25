import React from "react";
import "../../stylesheets/owner/signup.css";

function Signup() {
  return (
    <>
      <div className="parent-div">
        <div className="sub-div">
          <div className="form-div ">
            <h2 className="form-heading">Owner Signup</h2>

            <form>
              <div className="mt-5">
                <input type="text" placeholder="Name" className="text-field" />
              </div>

              <div className="mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="text-field"
                />
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Phone" className="text-field" />
              </div>

              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="text-field"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="text-field"
                />
              </div>
              <div className="mt-5">
                <button className="form-btn">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
