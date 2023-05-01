import React from "react";
import styles from '../../stylesheets/owner/auth.module.css'
import LoginForm from "../LoginForm";
import LoginTitle from "../LoginTitle";

function Login() {
  return (
    <>
      <div className={styles.parent_div}>
        <div className={styles.sub_div}>
          <div className={styles.form_div}>
           <LoginTitle title='Owner Login'/>
            <LoginForm/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
