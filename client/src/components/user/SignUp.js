import React from "react";
import "../../stylesheets/user/Signup.css";

function SignUp() {
  return (
    <>
      <div
        className="parent-div"
        style={{ backgroundImage: "linear-gradient(115deg, #5379A6, #B4C3D5)" }}
      >
        <div className="content-div">
          <div className="sub-div">
            <div
              className="image-div"
              style={{ backgroundImage: `url('images/sign-cover.png')` }}
            >
              <h1 className="heading1">Welcome back</h1>
              <div>
                <p className="sub-heading">To keep connected please login</p>
              </div>
              <div>
                <button className="signin-btn">Sign in</button>
              </div>
            </div>
            <div className="form-div">
              <h2 className="form-heading">Create account</h2>
              <p className="mb-4">
                Create your account, it's free and only take a minute
              </p>
              <form>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="text-field"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="email"
                    placeholder="Email"
                    className="text-field"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
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
      </div>
    </>
  );
}

export default SignUp;
