import React from 'react'
import styles from '../../stylesheets/login.module.css'

function ImageSlide() {
  return (
    <div
    className={styles.image}
    style={{ backgroundImage: `url('images/login.png')` }}
  >
    <div className='p-12'>
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
  </div>
  )
}

export default ImageSlide