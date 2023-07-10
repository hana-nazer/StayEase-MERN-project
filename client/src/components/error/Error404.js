import React from "react";
import styles from "../../stylesheets/error.module.css";

function Error404() {
  return (
    <>
      <main>
        <div className={`${styles.loading} ${styles.wave}`}>404</div>

        <div className={`${styles.not_found} ${styles.wave}`}>
          Page Not Found
        </div>
      </main>
    </>
  );
}

export default Error404;
