import React from "react";
import "../../fonts/fonts.css";

import { useNavigate } from "react-router-dom";

function BookNow(props) {
  const resortId = props.resortId;
  const navigate = useNavigate();
  const onBook = () => {
    if (!localStorage.getItem("user_token")) {
      navigate("/login");
    }
    navigate(`/book/${resortId}`);
  };
  return (
    <>
      <div>
        <button
          className="w-full p-2 text-2xl font-semibold tracking-wide text-white rounded-md bg-nav-color mb-7 font-oswald"
          onClick={onBook}
        >
          Book now
        </button>
      </div>
    </>
  );
}

export default BookNow;
