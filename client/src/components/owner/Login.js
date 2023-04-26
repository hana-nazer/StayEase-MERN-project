import React from "react";
import styles from '../../stylesheets/owner/auth.module.css'

function Login() {
  return (
    <>
      <div className={styles.parent_div}>
        <div className={styles.sub_div}>
          <div className={styles.form_div}>
            <h2 className={styles.form_heading}>Owner Login</h2>

            <form>
              <div className="mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.text_field}
                />
              </div>

              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className={styles.text_field}                />
              </div>

              <div className="mt-5">
                <button className={styles.form_btn}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
