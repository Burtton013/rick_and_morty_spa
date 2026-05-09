import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { SearchBar } from "./ui/SearchBar";
import { CharacterGrid } from "@/characters/components/CharacterGrid";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { searchCharactersAction } from "@/characters/actions/search-character.action";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? undefined;

  console.log(name);

  const { data = [] } = useQuery({
    queryKey: ["search", { name }],
    queryFn: () => searchCharactersAction({ name }),
    staleTime: 1000 * 60 * 5, // 5min
    enabled: !!name,
  });
  return (
    <>
      <CustomJumbotron
        title="Wubba lubba dub dub!"
        subtitle="Base de datos de personajes de Rick & Morty"
      />
      <SearchBar />
      <CharacterGrid characters={data} />
    </>
  );
};

export default SearchPage;
