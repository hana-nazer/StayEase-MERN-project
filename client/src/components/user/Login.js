import React from "react";
import styles from "../../stylesheets/login.module.css";
import LoginForm from "../LoginForm";
import ImageSlide from "./ImageSlide";
import LoginTitle from "../LoginTitle";

function Login() {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.content}>
          <div className={styles.sub}>
            <ImageSlide />
            <div className={styles.form}>
              <LoginTitle title="Login to your Account" />
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
