import React from 'react'
import { Link } from "react-router-dom";
import styles from "../../../stylesheets/error.module.css";

function Error500() {
  return (
    <main>
        <div className={`${styles.loading} ${styles.wave}`}>500</div>

        <div className={`${styles.not_found} ${styles.wave}`}>
          Internal Server Error
        </div>
        <div className="flex items-center justify-center">
          <Link className="text-center text-white underline" to='/'>
            Back to HomePage
          </Link>
        </div>
      </main>
  )
}

export default Error500