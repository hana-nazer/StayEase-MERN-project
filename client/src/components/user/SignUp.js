import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../stylesheets/user/signup.module.css";
import { RegisterUser } from "../../api calls/users";
import Logo from "../Logo";

function SignUp() {
  const navigate = useNavigate();
  const [nameIsValid, setNameIsvalid] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const invalidName = !nameIsValid && nameIsTouched;
  const invalidEmail = !emailIsValid && emailIsTouched;

  const nameChangeHandler = (event) => {
    if (event.target.value.trim() === "") {
      setNameIsvalid(false);
    } else {
      setNameIsvalid(true);
    }
  };

  const emailChangeHandler = (event) => {
    if (event.target.value.trim() === "" || event.target.value.includes("@")) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    if (event.target.name === "name") {
      nameChangeHandler(event);
    }

    if (event.target.name === "email") {
      emailChangeHandler(event);
    }
  };

  const formSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await RegisterUser(formData);
      console.log(response); // Log the response data or handle the response as per your requirements
      if (response.success) {
        alert(response.message);
        navigate("/home");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log(error); // Handle the error as per your requirements
    }
  };

  return (
    <>
      <div
        className={styles.parent}
        style={{ backgroundImage: "linear-gradient(115deg, #5379A6, #B4C3D5)" }}
      >
        <div className={styles.content}>
          <div className={styles.subdiv}>
            <div
              className={styles.imagediv}
              style={{ backgroundImage: `url('images/sign-cover.png')` }}
            >
              <div >
              <Logo/>
                
              </div>
              <h1 className={styles.heading1}>Welcome back</h1>
              <div>
                <p className={styles.subheading}>
                  To keep connected please login
                </p>
              </div>
              <div>
                <button className={styles.signinbtn}>Sign in</button>
              </div>
            </div>
            <div className={styles.form}>
              <h2 className={styles.formheading}>Create account</h2>
              <p className="mb-4">
                Create your account, it's free and only take a minute
              </p>

              <form onSubmit={formSubmit}>
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className={styles.textfield}
                    name="name"
                    value={formData.name}
                    onFocus={() => setNameIsTouched(false)}
                    onBlur={() => setNameIsTouched(true)}
                    onChange={handleChange}
                  />
                  {invalidName && (
                    <p className="text-red-700">Name is required</p>
                  )}
                </div>
                <div className="mt-5">
                  <input
                    type="email"
                    placeholder="Email"
                    className={styles.textfield}
                    name="email"
                    value={formData.email}
                    onFocus={() => setEmailIsTouched(false)}
                    onBlur={() => setEmailIsTouched(true)}
                    onChange={handleChange}
                  />
                  {invalidEmail && (
                    <p className="text-red-700">Please enter a valid email</p>
                  )}
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    className={styles.textfield}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-5">
                  <button className={styles.formbtn} type="submit">
                    Sign Up
                  </button>
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
