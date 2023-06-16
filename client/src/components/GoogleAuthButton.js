import React from 'react';
import styles from '../stylesheets/googleAuth.module.css';

function GoogleAuthButton() {
  return (
    <>
      <button type="button" className={`${styles.login_with_google_btn} w-full`}>
        Sign in with Google
      </button>
    </>
  );
}

export default GoogleAuthButton;
