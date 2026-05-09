import { useQuery } from "@tanstack/react-query";
import { searchCharactersAction } from "../actions/search-character.action";

export const useSearchedCharacter = (name: string) => {
  return useQuery({
    queryKey: ["search", name],
    queryFn: () => searchCharactersAction({ name }),
    enabled: !!name,
  });
};
