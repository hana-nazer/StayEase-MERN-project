import React from "react";
import styles from "../../stylesheets/loginPage.module.css";
import LoginForm from "../LoginForm";
import LoginTitle from "../LoginTitle";
import { adminLogin } from "../../api calls/admin";

function Login() {
  const handleSubmit = async (formData) => {
    console.log(formData);
    try {
      const response = await adminLogin(formData);
      if (response.success) {
        console.log(response.message);
        localStorage.setItem("admin_token", response.data);
        // usenavigate
        window.location.href = "/admin/dashboard";
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
            <LoginTitle title="Admin Login" />
            <LoginForm onSubmit={handleSubmit} role="admin" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

// Mustang@123
