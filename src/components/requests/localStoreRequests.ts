interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}
export const getFavouriteUsers = (): User[] => {
  const usersString = localStorage.getItem("favourites");
  return usersString ? JSON.parse(usersString) : [];
};

export const addFavouriteUser = (user: User): void => {
  const favourites = getFavouriteUsers();
  if (!favourites.some((favUser) => favUser.id === user.id)) {
    favourites.push(user);
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }
};

export const removeFavouriteUser = (userId: number): void => {
  const favourites = getFavouriteUsers();
  const updatedFavourites = favourites.filter((user) => user.id !== userId);
  localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
};
