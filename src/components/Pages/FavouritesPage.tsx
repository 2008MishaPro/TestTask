import { useState } from "react";
import { Header } from "../Elements/Header";
import { getFavouriteUsers } from "../requests/localStoreRequests";
import { UserCard } from "../Elements/Cards/UserCard";

export const FavouritesPage = () => {
  const allFavUsers = getFavouriteUsers();
  const [whatsShowing, setShowing] = useState(true)
  const UserRender = () => {
    if (allFavUsers && allFavUsers.length>0) {
        setShowing(true)
      return (
        <>
          {allFavUsers.map((user) => (
            <UserCard {...user} key={user.id} />
          ))}
        </>
      );
    } else {
        setShowing(false)
      return (
          <div className="noContent">
              <p>Вы пока никого не добавили в избранное 😭</p>
          </div> 
      )
    }
  };
  return (
    <div className="mainPage">
      <Header />
      <div className={`usersContainer ${whatsShowing ? '':'noCards'}`}>
        <UserRender />
      </div>
    </div>
  );
};
