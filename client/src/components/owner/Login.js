import styles from "../../stylesheets/loginPage.module.css";

import { LoginOwner } from "../../api calls/owner";
import LoginForm from "../LoginForm";
import LoginTitle from "../LoginTitle";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (formData) => {
    try {
      const response = await LoginOwner(formData);
      if (response.success) {
        localStorage.setItem("owner_token", response.data);
        navigate("/owner/");
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.parent_div}>
        <div className={styles.sub_div}>
          <div className={styles.form_div}>
            <LoginTitle title="owner Login" />
            <LoginForm onSubmit={handleSubmit} role="owner" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
