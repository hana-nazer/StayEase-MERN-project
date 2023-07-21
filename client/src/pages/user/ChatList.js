import React from "react";
import Contacts from "../chats/Contacts";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";

function ChatList() {
  const currentUser = useSelector((state) => state.getUser.getUser);
  const role = currentUser.role;
  const name = currentUser.name;
  return (
    <>
      {/* <div className="fixed top-0 right-0 p-4"> */}
      <Navbar role={role} name={name} />
      <Contacts role="user" />
      <Footer />
      {/* </div> */}
    </>
  );
}

export default ChatList;
