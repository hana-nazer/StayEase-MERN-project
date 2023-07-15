import React, { useEffect, useState } from "react";
import { usersList } from "../../api calls/admin";
import { useNavigate } from "react-router-dom";

function AllUsersList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await usersList();
      if (response.success) {
        setUsers(response.data);
      }
    } catch (error) {
      if (error.message === "500") {
        navigate("/admin/error500");
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <p className="text-2xl font-semibold text-center">Users</p>
      <div className="p-4 ">
        <ul>
          {users.map((user, index) => (
            <li className="mb-4" key={user.id}>
              <p className="mb-2">Name: {user.name}</p>
              <p className="mb-2">Email: {user.email}</p>
              {index !== users.length - 1 && <hr className="border-gray-300" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AllUsersList;
