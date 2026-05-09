import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { SearchBar } from "../search/ui/SearchBar";
import { CharacterGrid } from "@/characters/components/CharacterGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { useSearchParams } from "react-router";
import { usePagesCharacters } from "@/characters/hooks/usePagesCharacters";
import { useSelectedTab } from "@/characters/hooks/useSelectedTab";
import { FavoriteCharacterContext } from "@/characters/context/FavoriteCharacterContext";
import { use } from "react";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //--> Params paginacion
  const page = searchParams.get("page") ?? "1";

  //--> Params Active Tab ++ validacion
  const activeTab = searchParams.get("tab") ?? "all";

  const selectedTab = useSelectedTab(activeTab);

  //----> Api Request

  const { data: charactersResponse } = usePagesCharacters(Number(page));

  //context fav

  const { favCount, favs } = use(FavoriteCharacterContext);
  return (
    <>
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
                    prev.set("tab", "all");
                    return prev;
                  })
                }
              >
                Todos los personajes
              </TabsTrigger>

              <TabsTrigger
                value="favorites"
                onClick={() =>
                  setSearchParams((prev) => {
                    prev.set("tab", "favorites");
                    return prev;
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
            <CharacterGrid characters={charactersResponse?.results ?? []} />
          </TabsContent>

          {/*-------------------> Grid de personajes favoritos*/}
          <TabsContent value="favorites">
            <CharacterGrid characters={favs} />
          </TabsContent>
        </Tabs>

        {/*-------------------> Paginacion*/}
        {selectedTab !== "favorites" && (
          <CustomPagination totalPages={charactersResponse?.info.pages ?? 0} />
        )}
      </>
    </>
  );
};
