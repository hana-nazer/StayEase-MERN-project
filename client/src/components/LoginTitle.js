import React from 'react'
import styles from '../stylesheets/login.module.css'

function LoginTitle(props) {
  return (
    <h2 className={styles.formheading}>{props.title}</h2>
  )
}

export default LoginTitle