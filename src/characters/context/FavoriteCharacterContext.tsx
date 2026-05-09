import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Character } from "../interface/character.interface";
interface FavoriteCharacterContext {
  //State
  favs: Character[];
  favCount: number;
  //Metodos
  isFav: (hero: Character) => boolean;
  toggleFav: (character: Character) => void;
}

// ----> load favoritos desde localStorage

const loadFavoritesFromesLocalStorage = (): Character[] => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteCharacterContext = createContext({} as FavoriteCharacterContext);

export const FavoriteCharacterProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Character[]>(
    loadFavoritesFromesLocalStorage,
  );

  const toggleFav = (character: Character) => {
    const characterExist = favorites.find((ch) => ch.id === character.id);

    if (characterExist) {
      const newFav = favorites.filter((ch) => ch.id !== character.id);

      setFavorites(newFav);
      return;
    }

    setFavorites([...favorites, character]);
  };

  const isFav = (character: Character) => {
    return favorites.some((ch) => ch.id === character.id);
  };

  //----> Grabando favoritos a localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteCharacterContext
      value={{ favs: favorites, favCount: favorites.length, toggleFav, isFav }}
    >
      {children}
    </FavoriteCharacterContext>
  );
};
