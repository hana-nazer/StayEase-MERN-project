import React, { useEffect } from "react";
import ChatContainer from "../../components/chats/ChatContainer";
import { useSelector } from "react-redux";

function ChatPage() {
  const user = useSelector((state) => state.getUser.getUser);

  return (
    <>
      <ChatContainer role="user" user={user} />
    </>
  );
}

export default ChatPage;
