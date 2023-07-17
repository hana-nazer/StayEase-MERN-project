import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../api calls/users";
import { GetCurrentOwner } from "../../api calls/owner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function GetContacts({ contacts, role }) {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    let user;
    const presentUser = async () => {
      user = await getCurrentUser();
      setCurrentUser(user.data);
    };

    const presentOwner = async () => {
      user = await GetCurrentOwner();
      setCurrentUser(user.data);
    };
    if (role === "owner") {
      presentOwner();
    }

    if (role === "user") {
      presentUser();
    }
  }, []);

  const navigate = useNavigate();
  let loggedInUser;
  const changeCurrentChat = (contact) => {
    if (role === "user") {
      loggedInUser = async () => {
        const user = await getCurrentUser();
        navigate(`/chat/${user.data._id}`, { state: contact });
      };
      loggedInUser();
    }
    if (role === "owner") {
      loggedInUser = async () => {
        const user = await GetCurrentOwner();
        navigate(`/owner/chat/${user.data._id}`, { state: contact });
      };
      loggedInUser();
    }
  };
  return (
    <>
      <section className="flex flex-col justify-center min-h-screen p-4 antialiased text-gray-600 bg-gray-50">
        <div className="h-full">
          <div className="relative max-w-[340px] mx-auto bg-white shadow-lg rounded-lg">
            <header className="px-5 pt-6 pb-4 border-b border-gray-200">
              <div>
                <div>
                  <a
                    className="inline-flex text-gray-800 hover:text-gray-900"
                    href="#0"
                  >
                    <h2 className="text-xl font-bold leading-snug">
                      {currentUser.name}
                    </h2>
                  </a>
                  <a
                    className="block text-sm font-medium hover:text-indigo-500"
                    href="#0"
                  >
                    {currentUser.email}
                  </a>
                </div>
              </div>
            </header>
            <div className="px-5 py-3">
              <h3 className="mb-1 text-xs font-semibold text-gray-400 uppercase">
                Chats
              </h3>

              {contacts.map((contact, index) => (
                <div className="divide-y divide-gray-200" key={index}>
                  <button
                    className="w-full py-2 text-left focus:outline-none focus-visible:bg-indigo-50 "
                    onClick={() => changeCurrentChat(contact)}
                  >
                    <div className="flex items-center justify-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                        <FontAwesomeIcon
                          icon={faUser}
                          classNameNameName="text-white"
                        />
                      </div>

                      <div className="ml-3">
                        <h4 className="text-sm font-semibold text-gray-900">
                          {contact.name}
                        </h4>
                        <div className="text-[13px]">Tap to chat</div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetContacts;
