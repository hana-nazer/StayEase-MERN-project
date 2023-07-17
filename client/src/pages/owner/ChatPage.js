import React from "react";
import ChatContainer from "../../components/chats/ChatContainer";
import { useSelector } from "react-redux";

function ChatPage() {
    const owner = useSelector((state)=>state.getUser.getOwner)
  return (
    <>
      <ChatContainer  role="owner" user={owner}/>
    </>
  );
}

export default ChatPage;
