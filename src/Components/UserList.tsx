import { useState, useEffect } from "react";
import { Endpoint } from "../types/endpoint.enum";
import User from "../types/users";
import customFetch from "../utils/customFetch";

const UserList = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await customFetch(Endpoint.users);
      setUsers(data.users);
    };

    fetchData();
  }, []);

  return (
    <div>
      {users &&
        users.map(({ id, name }) => {
          return (
            <div key={id} style={{ margin: "20% 0", width: "100%" }}>
              {name}
            </div>
          );
        })}
    </div>
  );
};

export default UserList;
