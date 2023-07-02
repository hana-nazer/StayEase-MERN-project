import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        toast.error(response.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full px-10 py-10 mx-8 mx-auto bg-white border shadow-lg md:w-1/2 lg:w-1/3 lg:flex-row rounded-xl">
          <LoginTitle title="owner Login" />
          <LoginForm onSubmit={handleSubmit} role="owner" />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
