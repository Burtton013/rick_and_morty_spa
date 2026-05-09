import { CharactersLayout } from "@/characters/layouts/CharactersLayout";
import { HomePage } from "@/characters/pages/home/HomePage";
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
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);
