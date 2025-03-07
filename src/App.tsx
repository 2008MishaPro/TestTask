import { Routes, Route } from "react-router-dom";
import "./App.css";
import { MainPage } from "./components/Pages/MainPage";
import { FavouritesPage } from "./components/Pages/FavouritesPage";
import { UserPage } from "./components/Pages/UserPage";
import { NotFoundPage } from "./components/Pages/NotFoundPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/user/:userId/:name" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
