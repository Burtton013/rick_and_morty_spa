import { use } from "react";
import { useSearchParams } from "react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { SearchBar } from "../search/ui/SearchBar";
import { CharacterGrid } from "@/characters/components/CharacterGrid";
import { usePagesCharacters } from "@/characters/hooks/usePagesCharacters";
import { useSelectedTab } from "@/characters/hooks/useSelectedTab";
import { FavoriteCharacterContext } from "@/characters/context/FavoriteCharacterContext";

import { useSearchedCharacter } from "@/characters/hooks/useSearchedCharacter";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //--> Params paginacion
  const page = searchParams.get("page") ?? "1";

  //--> Params Active Tab ++ validacion
  const activeTab = searchParams.get("tab") ?? "all";

  //--> Params Search
  const name = searchParams.get("name") ?? "";

  const selectedTab = useSelectedTab(activeTab);

  //----> Api Request paginacion
  const { data: charactersResponse } = usePagesCharacters(Number(page));

  //----> Api Request search
  const { data: searchedCharacters = [] } = useSearchedCharacter(name);

  //----> Context fav
  const { favCount, favs } = use(FavoriteCharacterContext);

  return (
    <>
      {/*-------------------> Header */}
      <CustomJumbotron
        title="Wubba lubba dub dub!"
        subtitle="Base de datos de personajes de Rick & Morty"
      />

      {/* -------------------> Tabs */}
      <Tabs value={selectedTab} className="w-full">
        <div className="flex items-center gap-4 mb-8">
          {/*-------------------> Search Bar */}
          <SearchBar />

          <TabsList className="grid grid-cols-2 shrink-0">
            <TabsTrigger
              value="all"
              onClick={() =>
                setSearchParams((prev) => {
                  const params = new URLSearchParams(prev);

                  params.set("tab", "all");

                  return params;
                })
              }
            >
              Todos los personajes
            </TabsTrigger>

            <TabsTrigger
              value="favorites"
              onClick={() =>
                setSearchParams((prev) => {
                  const params = new URLSearchParams(prev);

                  params.set("tab", "favorites");

                  return params;
                })
              }
              className="flex items-center gap-2"
            >
              Favoritos ({favCount})
            </TabsTrigger>
          </TabsList>
        </div>

        {/*-------------------> Grid de todos los personajes */}
        <TabsContent value="all">
          <CharacterGrid
            characters={name ? searchedCharacters : (charactersResponse?.results ?? [])}
          />
        </TabsContent>

        {/*-------------------> Grid de personajes favoritos*/}
        <TabsContent value="favorites">
          <CharacterGrid characters={favs} />
        </TabsContent>
      </Tabs>

      {/*-------------------> Paginacion*/}
      {selectedTab !== "favorites" && !name && (
        <CustomPagination totalPages={charactersResponse?.info.pages ?? 0} />
      )}
    </>
  );
};
