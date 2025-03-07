import { useNavigate } from "react-router-dom";
import "../Styles/Header.css";
export const Header = () => {
  const navigate = useNavigate();
  const ShowFavouritesPage = () => {
    try {
      navigate("/favourites");
    } catch (error) {
      alert(`Не удалось перейти на страницу: ${error}`);
    }
  };

  return (
    <header className="headerPanel">
      <div onClick={ShowFavouritesPage}>
        <p>Избранное ☆</p>
      </div>
    </header>
  );
};
