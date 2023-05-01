import React from "react";
import styles from '../stylesheets/login.module.css'

function LoginForm() {
  return (
    <div>
      <form>
        <div className="mt-5">
          <input
            type="email"
            placeholder="Email"
            className={styles.textfield}
          />
        </div>
        <div className="mt-5">
          <input
            type="password"
            placeholder="Password"
            className={styles.textfield}
          />
        </div>
        <div className="mt-5">
          <button  className={styles.formbtn}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
