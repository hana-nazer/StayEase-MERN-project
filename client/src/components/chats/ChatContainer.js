import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMessages, sendMessages } from "../../api calls/Chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function ChatContainer({ role, user }) {
  const [chats, setChats] = useState([]);
  const location = useLocation();
  const state = location.state;

  const Messages = async () => {
    const response = await getMessages(role, user._id, state._id);
    setChats(response);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const inputField = e.target.elements.message;
    const message = inputField.value;
    let response;
    if (role === "user") {
      response = await sendMessages(role, user._id, state._id, message, "user");
    }
    if (role === "owner") {
      response = await sendMessages(
        role,
        user._id,
        state._id,
        message,
        "owner"
      );
    }

    const msgs = [...chats];
    msgs.push({ fromSelf: true, message: message });
    setChats(msgs);
    inputField.value = "";
  };

  useEffect(() => {
    Messages();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen p-10 text-gray-800 bg-gray-100">
        <div className="flex flex-col flex-grow w-full max-w-xl overflow-hidden bg-white rounded-lg shadow-xl">
          <div className="flex items-center h-16 bg-gray-300">
            <div class="flex-shrink-0 h-8 w-8 rounded-full bg-gray-700 ml-6 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} className="text-white" />
            </div>

            <p className="ml-3 text-xl font-semibold">{state.name}</p>
          </div>

          <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
            {chats && chats.length > 0 ? (
              chats.map((chat, index) => (
                <div
                  className={`flex w-full mt-2 space-x-3 ${
                    chat.fromSelf ? "justify-end" : "justify-start"
                  }`}
                  key={index}
                >
                  <div class="flex-shrink-0 h-8 w-8 rounded-full bg-gray-700 flex justify-center items-center">
                    <FontAwesomeIcon icon={faUser} />
                  </div>

                  {!chat.fromSelf ? (
                    <div className="p-3 bg-gray-300 rounded-r-lg rounded-bl-lg">
                      <p className="text-sm">{chat.message}</p>
                    </div>
                  ) : (
                    <div className="p-3 text-white bg-blue-600 rounded-l-lg rounded-br-lg">
                      <p className="text-sm">{chat.message}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No chats available.</p>
            )}
          </div>

          <form onSubmit={sendMessage}>
            <div className="flex p-4 bg-gray-300">
              <input
                className="flex-grow h-10 px-3 text-sm "
                type="text"
                placeholder="Type your message…"
                name="message"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChatContainer;
