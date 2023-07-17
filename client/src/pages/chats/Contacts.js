import React, { useEffect, useState } from "react";
import GetContacts from "../../components/chats/GetContacts";
import { getChats } from "../../api calls/Chat";
import { useParams } from "react-router-dom";
function Contacts({ role }) {
  const [contacts, setContacts] = useState([]);
  const { id } = useParams();
  const getContacts = async () => {
    const response = await getChats(id,role);
    setContacts(response.data);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <GetContacts contacts={contacts} role={role}/>
    </>
  );
}

export default Contacts;
