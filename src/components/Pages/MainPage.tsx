import { useEffect, useState } from "react";
import { GetUsers } from "../requests/userFeach";
import { UserCard } from "../Elements/Cards/UserCard";

export const MainPage = () => {
  const [users, setUsers] = useState([
    {
      id: "",
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
    },
  ]);
  useEffect(() => {
    const getData = async () => {
      const data = await GetUsers("https://jsonplaceholder.typicode.com/users");
      setUsers(data);
    };
    getData();
  }, []);
  return (
    <div className="mainPage">
      <div className="usersContainer">
        {users.map((user) => (
          <UserCard {...user} key={user.id} />
        ))}
      </div>
    </div>
  );
};
