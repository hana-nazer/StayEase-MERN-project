import React from "react";
import styles from '../../stylesheets/user/login.module.css'

function Login() {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.content}>
          <div className={styles.sub}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url('images/login.png')` }}
            >
              <h1 className={styles.heading1}>New Here?</h1>
              <div>
                <p className={styles.subheading}>
                  Discover hotels tailored to your needs. Sign up now!
                </p>
              </div>
              <div>
                <button className={styles.signinbtn}>Sign Up</button>
              </div>
            </div>
            <div className={styles.form}>
              <h2 className={styles.formheading}>Login to your account</h2>

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
                  <button className={styles.formbtn}>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
