import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { CharactersLayout } from "@/characters/layouts/CharactersLayout";
import { CharacterPage } from "@/characters/pages/character/CharacterPage";
import { HomePage } from "@/characters/pages/home/HomePage";
import { AdminPage } from "./lazyPages";
import { SearchPage } from "./lazyPages";
import { createBrowserRouter } from "react-router";

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
        path: "character/1",
        element: <CharacterPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
