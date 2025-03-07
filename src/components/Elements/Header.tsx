import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/Header.css";
export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ShowFavouritesPage = () => {
    try {
      if (location.pathname !== "/favourites") {
        navigate("/favourites");
      }
    } catch (error) {
      alert(`Не удалось перейти на страницу: ${error}`);
    }
  };

  return (
    <header >
      <div onClick={ShowFavouritesPage} className="headerPanel">
        <p>Избранное </p>
        <span>☆</span>
      </div>
    </header>
  );
};
