import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function UserChatButton({ owner }) {
  const user = useSelector((state) => state.getUser.getUser);

  const navigate = useNavigate();
  const chatClick = () => {
    if (!localStorage.getItem("user_token")) {
      navigate("/login");
    }
    navigate(`/chat/${user._id}`, { state: owner });
  };
  return (
    <button
      className="px-4 font-semibold bg-gray-300"
      style={{ height: "40px" }}
      onClick={chatClick}
    >
      Chat with the owner
    </button>
  );
}

export default UserChatButton;
