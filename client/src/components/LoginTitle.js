import React from "react";
import styles from "../stylesheets/loginTitle.module.css";
import '../fonts/fonts.css'

function LoginTitle(props) {
  return <h2 className={`${styles.login_title} font-oswald tracking-wide`}>{props.title}</h2>;
}

export default LoginTitle;
