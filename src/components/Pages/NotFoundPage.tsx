import { Link } from "react-router-dom";
export const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Страница не найдена</h1>
      <p>К сожалению, запрашиваемая страница не существует.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};
