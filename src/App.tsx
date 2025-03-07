import { Routes, Route } from "react-router-dom";
import "./App.css";
import { MainPage } from "./components/Pages/MainPage";
import { FavouritesPage } from "./components/Pages/FavouritesPage";
import { UserPage } from "./components/Pages/UserPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/user/:userId/:name" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
