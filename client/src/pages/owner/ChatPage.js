import React, { useEffect, useRef }  from "react";
import ChatContainer from "../../components/chats/ChatContainer";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

function ChatPage() {
    const user = useSelector((state)=>state.getUser.getOwner)
    const socket = useRef();
    useEffect(() => {
      if (user) {
        socket.current = io("https://stayease-z802.onrender.com");
        socket.current.emit("add-user", user._id);
      }
    }, [user]);
  
  return (
    <>
      <ChatContainer  role="owner" user={user} socket={socket}/>
    </>
  );
}

export default ChatPage;
