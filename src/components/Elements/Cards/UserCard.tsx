import { useNavigate } from "react-router-dom";

interface UserProps {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export const UserCard = ({
  name,
  username,
  email,
  phone,
  website,
}: UserProps) => {
  return (
    <div className="userCard">
      <h1>{name}</h1>
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </div>
  );
};
