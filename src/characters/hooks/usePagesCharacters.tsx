import { useQuery } from "@tanstack/react-query";
import { getCharacterByPageAction } from "../actions/get-character-by-page.actions";

export const usePagesCharacters = (page: number) => {
  return useQuery({
    queryKey: ["characters", { page }],
    queryFn: () => getCharacterByPageAction(Number(page)),
    staleTime: 1000 * 60 * 5, //5 minutos
  });
};
