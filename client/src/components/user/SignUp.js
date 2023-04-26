import React from "react";
import styles from '../../stylesheets/user/signup.module.css'

function SignUp() {
  return (
    <>
      <div
        className={styles.parent}
        style={{ backgroundImage: "linear-gradient(115deg, #5379A6, #B4C3D5)" }}
      >
        <div className={styles.content}>
          <div className={styles.subdiv}>
            <div
              className={styles.imagediv}
              style={{ backgroundImage: `url('images/sign-cover.png')` }}
            >
              <h1 className={styles.heading1}>Welcome back</h1>
              <div>
                <p className={styles.subheading}>To keep connected please login</p>
              </div>
              <div>
                <button className={styles.signinbtn}>Sign in</button>
              </div>
            </div>
            <div className={styles.form}>
              <h2 className={styles.formheading}>Create account</h2>
              <p className="mb-4">
                Create your account, it's free and only take a minute
              </p>
              <form>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className={styles.textfield}
                    name="username"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="email"
                    placeholder="Email"
                    className={styles.textfield}
                    name="email"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    className={styles.textfield}
                    name="password"
                  />
                </div>
                <div className="mt-5">
                  <button className={styles.formbtn}>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
