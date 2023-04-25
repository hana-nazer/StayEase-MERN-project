import React from "react";
import "../../stylesheets/user/Login.css";

function Login() {
  return (
    <>
      <div className="parent-div flex items-center justify-center ">
        <div className="content-div">
          <div className="sub-div border">
            <div
              className="image-div"
              style={{ backgroundImage: `url('images/login.png')` }}
            >
              <h1 className="heading1">New Here?</h1>
              <div>
                <p className="sub-heading">
                  Discover hotels tailored to your needs. Sign up now!
                </p>
              </div>
              <div>
                <button className="signin-btn">Sign Up</button>
              </div>
            </div>
            <div className="form-div">
              <h2 className="form-heading">Login to your account</h2>

              <form>
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
                  <button className="form-btn">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
