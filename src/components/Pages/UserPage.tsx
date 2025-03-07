import { useParams } from "react-router-dom";
import { Header } from "../Elements/Header";
import { use, useEffect, useState } from "react";
import { GetUsers } from "../requests/userFeach";
import { UserPostCard } from "../Elements/Cards/UserPostCard";
import "../Styles/UserPosts.css";
import {
  addFavouriteUser,
  getFavouriteUsers,
  removeFavouriteUser,
} from "../requests/localStoreRequests";
export const UserPage = () => {
  const { userId, name } = useParams();
  const [postData, setData] = useState([]);
  const [favouData, setFavourite] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const getData = async (id: number) => {
      const data = await GetUsers(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      setData(data);
    };
    getData(Number(userId));
  }, []);

  useEffect(() => {
    const getToSet = async (id: number) => {
      const data = await GetUsers(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setFavourite(data);

      const favourites = getFavouriteUsers();
      const isUserFavourite = favourites.some((user) => user.id === id);
      setIsFavourite(isUserFavourite);
    };
    getToSet(Number(userId));
  }, [isFavourite]);

  const clickToFavourite = () => {
    const user = favouData;
    if (isFavourite) {
      removeFavouriteUser(Number(userId));
    } else {
      addFavouriteUser(user);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="userPage">
      <Header />
      <div className="postsContent">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "30px",
          }}
        >
          <div className="userAddToFavourite" onClick={clickToFavourite}>
            <h2 className="userName">{name} </h2>
            <span className={`star ${isFavourite ? "favourite" : ""}`}>
              {isFavourite ? "★" : "☆"}
            </span>
          </div>
          <p>Posts</p>
        </div>
        <div className="postsContainer">
          {postData.map((post) => (
            <UserPostCard {...post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
