import { use, useState } from "react";
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
import type { Character } from "@/characters/interface/character.interface";
import { CharacterModal } from "@/characters/components/CharacterModal";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //--> State modal
  const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

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

  //----> Abrir Modal

  const handleOpenModal = (character: Character) => {
    setSelectedCharacter(character);
    setOpen(true);
  };

  return (
    <>
      {/*-------------------> Header */}
      <CustomJumbotron
        title="Wubba lubba dub dub!"
        subtitle="Base de datos de personajes de Rick & Morty"
      />

      {/* -------------------> Tabs */}
      <Tabs value={selectedTab} className="w-full">
        <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center">
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
            onSelect={handleOpenModal}
          />
        </TabsContent>

        {/*-------------------> Grid de personajes favoritos*/}
        <TabsContent value="favorites">
          <CharacterGrid characters={favs} onSelect={handleOpenModal} />
        </TabsContent>
      </Tabs>

      {/*-------------------> Paginacion*/}
      {selectedTab !== "favorites" && !name && (
        <CustomPagination totalPages={charactersResponse?.info?.pages ?? 2} />
      )}
      {/*-------------------> Modal*/}
      <CharacterModal open={open} onOpen={setOpen} character={selectedCharacter} />
    </>
  );
};
