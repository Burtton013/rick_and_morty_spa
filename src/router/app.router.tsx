import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { CharactersLayout } from "@/characters/layouts/CharactersLayout";
import { CharacterPage } from "@/characters/pages/character/CharacterPage";
import { HomePage } from "@/characters/pages/home/HomePage";
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const SearchPage = lazy(() => import("@/characters/pages/search/SearchPage"));
const AdminPage = lazy(() => import("@/admin/pages/AdminPage"));

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
