import React from "react";
import styles from "../../stylesheets/loginPage.module.css";
import LoginForm from "../LoginForm";
import LoginTitle from "../LoginTitle";
import { LoginUser } from "../../api calls/users";

function Login() {
  const handleSubmit = async (formData) => {
    console.log(formData);
    try {
      const response = await LoginUser(formData);
      if (response.success) {
        console.log(response.message);
        localStorage.setItem("user_token", response.data);
        window.location.href = "/";
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={styles.parent_div}>
        <div className={styles.sub_div}>
          <div className={styles.form_div}>
            <LoginTitle title=" Login into your account" />
            <LoginForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
