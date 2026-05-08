import { CharactersLayout } from "@/characters/layouts/CharactersLayout";
import { CharacterPage } from "@/characters/pages/character/CharacterPage";
import { HomePage } from "@/characters/pages/home/HomePage";

import { SearchPage } from "./lazyPages";
import { createBrowserRouter, Navigate } from "react-router";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <CharactersLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "character/:idSlug",
        element: <CharacterPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);
