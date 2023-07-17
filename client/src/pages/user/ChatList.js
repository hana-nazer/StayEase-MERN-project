import React from "react";
import Contacts from "../chats/Contacts";

function ChatList() {
  return (
    <>
    <div className="fixed top-0 right-0 p-4">
    <Contacts  role="user"/>
    </div>
     
    </>
  );
}

export default ChatList;
