import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../stylesheets/loginPage.module.css";
import LoginForm from "../LoginForm";
import LoginTitle from "../LoginTitle";
import { adminLogin } from "../../api calls/admin";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const response = await adminLogin(formData);
      if (response.success) {
        localStorage.setItem("admin_token", response.data);
        navigate("/admin/dashboard");
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
