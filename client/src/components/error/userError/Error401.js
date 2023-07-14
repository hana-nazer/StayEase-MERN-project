import React from 'react'
import styles from "../../../stylesheets/error.module.css";
import { Link } from "react-router-dom";

function Error401() {
  return (
    <main>
    <div className={`${styles.loading} ${styles.wave}`}>401</div>

    <div className={`${styles.not_found} ${styles.wave}`}>
     UnAuthorized
    </div>
    <div className="flex items-center justify-center">
      <Link className="text-center text-white underline" to='/'>
        Back to HomePage
      </Link>
    </div>
  </main>
  )
}

export default Error401