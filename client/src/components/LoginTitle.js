import React from 'react'
import styles from '../stylesheets/loginTitle.module.css'

function LoginTitle(props) {
  return (
    <h2 className={styles.login_title}>{props.title}</h2>
  )
}

export default LoginTitle