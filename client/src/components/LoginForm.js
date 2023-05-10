import React, { useState } from "react";
import styles from "../stylesheets/login.module.css";

function LoginForm(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;

    const emailError = email ? "" : "Email is required";
    const passwordError = password ? "" : "Password is required";

    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (email && password) {
      props.onSubmit(formData);
    }
  };

  const clearError = (fieldName) => {
    setErrors({ ...errors, [fieldName]: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mt-5">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            className={styles.textfield}
            onChange={handleChange}
            onFocus={() => clearError("email")}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email}</span>
          )}
        </div>
        <div className="mt-5">
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            className={styles.textfield}
            onChange={handleChange}
            onFocus={() => clearError("password")}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
        </div>
        <div className="mt-5">
          <button className={styles.formbtn}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
