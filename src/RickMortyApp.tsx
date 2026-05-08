import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

export const RickMortyApp = () => {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
};
