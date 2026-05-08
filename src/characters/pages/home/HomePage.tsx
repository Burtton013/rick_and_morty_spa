import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { SearchBar } from "../search/ui/SearchBar";
import { useState } from "react";
import { CharacterGrid } from "@/characters/components/CharacterGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<"all" | "favorites">("all");
  return (
    <>
      <>
        {/*-------------------> Header */}
        <CustomJumbotron
          title="Wubba lubba dub dub!"
          subtitle="Base de datos de personajes de Rick & Morty"
        />
        {/* -------------------> Tabs */}
        <Tabs value={activeTab} className="w-full">
          <div className="flex items-center gap-4 mb-8">
            {/*-------------------> Search Bar */}
            <SearchBar />

            <TabsList className="grid grid-cols-2 shrink-0">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                Todos los personajes
              </TabsTrigger>

              <TabsTrigger
                value="favorites"
                onClick={() => setActiveTab("favorites")}
                className="flex items-center gap-2"
              >
                Favoritos (3)
              </TabsTrigger>
            </TabsList>
          </div>

          {/*-------------------> Grid de todos los personajes */}
          <TabsContent value="all">
            <CharacterGrid />
          </TabsContent>

          {/*-------------------> Grid de personajes favoritos*/}
          <TabsContent value="favorites">
            <CharacterGrid />
          </TabsContent>
        </Tabs>

        {/*-------------------> Paginacion*/}
        <CustomPagination totalPages={8} />
      </>
    </>
  );
};
