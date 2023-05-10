import React from "react";
import styles from '../../stylesheets/owner/auth.module.css'
import { LoginOwner } from "../../api calls/owner";
import LoginForm from "../LoginForm";
import LoginTitle from "../LoginTitle";

function Login() {
  const handleSubmit = async (formData) => {
    console.log(formData);
    try {
      const response = await LoginOwner(formData);
      if (response.success) {
        console.log(response.message);
        localStorage.setItem("owner_token", response.data);
        window.location.href = "/owner/resort_home";
      } else {
        console.log(response.message)
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
           <LoginTitle title='Owner Login'/>
            <LoginForm onSubmit={handleSubmit}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
