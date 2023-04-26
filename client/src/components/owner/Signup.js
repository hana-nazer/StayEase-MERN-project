import React from "react";
import styles from '../../stylesheets/owner/auth.module.css'

function Signup() {
  return (
    <>
      <div className={styles.parent_div}>
        <div className={styles.sub_div}>
          <div className={styles.form_div}>
            <h2 className={styles.form_heading}>Owner Signup</h2>

            <form>
              <div className="mt-5">
                <input type="text"  placeholder="Name" className={styles.text_field} />
              </div>

              <div className="mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.text_field}
                
                />
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Phone" className={styles.text_field}/>
              </div>

              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className={styles.text_field}
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className={styles.text_field}
                />
              </div>
              <div className="mt-5">
                <button className={styles.form_btn}>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
