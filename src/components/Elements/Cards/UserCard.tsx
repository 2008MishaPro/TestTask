import { useNavigate } from "react-router-dom";

interface UserProps {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export const UserCard = ({
  id,
  name,
  username,
  email,
  phone,
  website,
}: UserProps) => {
  const navigate = useNavigate();
  const ShowUserPage = () => {
    try {
        navigate(`/user/${Number(id)}/${encodeURIComponent(name)}`);
    } catch (error) {
      alert(`Не удалось перейти на страницу: ${error}`);
    }
  };

  return (
    <div className="userCard" onClick={ShowUserPage}>
      <h1>{name}</h1>
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </div>
  );
};
