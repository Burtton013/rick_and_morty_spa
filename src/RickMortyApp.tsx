import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FavoriteCharacterProvider } from "./characters/context/FavoriteCharacterContext";

const queryClient = new QueryClient();

export const RickMortyApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteCharacterProvider>
        <RouterProvider router={appRouter}></RouterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </FavoriteCharacterProvider>
    </QueryClientProvider>
  );
};
