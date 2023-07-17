import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../api calls/users";
import { GetCurrentOwner } from "../../api calls/owner";
import { current } from "@reduxjs/toolkit";

function GetContacts({ contacts, role }) {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const presentUser = async () => {
      const user = await getCurrentUser();
      setCurrentUser(user.data[0]);
      console.log(user.data);
    };

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
      <section class="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 min-h-screen p-4">
        <div class="h-full">
          <div class="relative max-w-[340px] mx-auto bg-white shadow-lg rounded-lg">
            <header class="pt-6 pb-4 px-5 border-b border-gray-200">
              <div>
                <div>
                  <a
                    class="inline-flex text-gray-800 hover:text-gray-900"
                    href="#0"
                  >
                    <h2 class="text-xl leading-snug font-bold">
                      {currentUser.name}
                    </h2>
                  </a>
                  <a
                    class="block text-sm font-medium hover:text-indigo-500"
                    href="#0"
                  >
                    {currentUser.email}
                  </a>
                </div>
              </div>
            </header>
            <div class="py-3 px-5">
              <h3 class="text-xs font-semibold uppercase text-gray-400 mb-1">
                Chats
              </h3>

              {contacts.map((contact, index) => (
                <div class="divide-y divide-gray-200" key={index}>
                  <button
                    class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50"
                    onClick={() => changeCurrentChat(contact)}
                  >
                    <div class="flex items-center">
                      <img
                        class="rounded-full items-start flex-shrink-0 mr-3"
                        src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg"
                        width="32"
                        height="32"
                        alt="Marie Zulfikar"
                      />
                      <div>
                        <h4 class="text-sm font-semibold text-gray-900">
                          {contact.name}
                        </h4>
                        <div class="text-[13px]">The video chat ended</div>
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
