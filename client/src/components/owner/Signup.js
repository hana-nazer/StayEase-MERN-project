import React, { useState } from "react";
import { RegisterOwner } from "../../api calls/owner";
import { useNavigate } from "react-router-dom";
import styles from "../../stylesheets/owner/auth.module.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    c_password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const handleFocus = (event) => {
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    let errorsObj = {};

    if (!formData.name.trim()) {
      errorsObj.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errorsObj.email = "Email is required";
    }
    if (!formData.phone.trim()) {
      errorsObj.phone = "Phone is required";
    }
    if (!formData.password.trim()) {
      errorsObj.password = "Password is required";
    }
    if (!formData.c_password.trim()) {
      errorsObj.c_password = "Confirm Password is required";
    }
    if (formData.password.trim() !== formData.c_password.trim()) {
      errorsObj.c_password = "Passwords do not match";
    }

    if (Object.keys(errorsObj).length !== 0) {
      setErrors(errorsObj);
      return;
    }

    try {
      const response = await RegisterOwner(formData);
      if (response.success) {
        navigate("/owner/");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <div className={styles.parent_div}>
        <div className={styles.sub_div}>
          <div className={styles.form_div}>
            <h2 className={styles.form_heading}>Register as Host</h2>
            <form onSubmit={formSubmit}>
              <div className="mt-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={styles.text_field}
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name}</div>
                )}
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={styles.text_field}
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email}</div>
                )}
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className={styles.text_field}
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
                {errors.phone && (
                  <div className="text-red-500">{errors.phone}</div>
                )}
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={styles.text_field}
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => setErrors({ ...errors, password: "" })}
                />
                {errors.password && (
                  <div className="text-red-500">{errors.password}</div>
                )}
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  name="c_password"
                  placeholder="Confirm Password"
                  className={styles.text_field}
                  value={formData.c_password}
                  onChange={handleChange}
                  onFocus={() => setErrors({ ...errors, c_password: "" })}
                />
                {errors.c_password && (
                  <div className="text-red-500">{errors.c_password}</div>
                )}
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
