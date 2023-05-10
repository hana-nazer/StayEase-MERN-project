import React from "react";
import styles from "../../stylesheets/login.module.css";
import LoginForm from "../LoginForm";
import ImageSlide from "./ImageSlide";
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
      <div className={styles.parent}>
        <div className={styles.content}>
          <div className={styles.sub}>
            <ImageSlide />
            <div className={styles.form}>
              <LoginTitle title="Login to your Account" />
              <LoginForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
