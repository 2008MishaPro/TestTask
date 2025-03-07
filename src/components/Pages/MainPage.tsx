import { useEffect, useState } from "react";
import { GetUsers } from "../requests/userFeach";
import { UserCard } from "../Elements/Cards/UserCard";
import { Header } from "../Elements/Header";
import "../Styles/UsersList.css"

export const MainPage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [canShowNext, setShowState] = useState(true);
  const usersLimitPerPage = 20;
  useEffect(() => {
    const getData = async (page: number) => {
      const data = await GetUsers(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${usersLimitPerPage}`
      );
      if (data && data.length > 0) {
        setShowState(true);
      } else {
        setShowState(false);
      }
      setUsers(data);
    };
    getData(currentPage);
  }, [currentPage]);

  const UserRender = () => {
    if (canShowNext) {
      return (
        <>
          {users.map((user) => (
            <UserCard {...user} key={user.id} />
          ))}
        </>
      );
    } else {
      return (
          <div className="noContent">
              <p>Больше ничего нет 😭</p>
          </div> 
      )
    }
  };
  const nextButton = () => {
    if (canShowNext) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const prevButton = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };
  return (
    <div className="mainPage">
      <Header />
      <div className={`usersContainer ${canShowNext ? '':'noCards'}`}>
        <UserRender />
      </div>
      <div className="buttonsContainer">
        <button onClick={prevButton} disabled={currentPage === 1}>
          ←
        </button>
        <p>{currentPage}</p>
        <button onClick={nextButton} disabled={!canShowNext}>
          →
        </button>
      </div>
    </div>
  );
};
