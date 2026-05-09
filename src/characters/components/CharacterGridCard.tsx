import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Character } from "../interface/character.interface";

import { use } from "react";
import { FavoriteCharacterContext } from "../context/FavoriteCharacterContext";

interface Props {
  character: Character;
  onSelect: (character: Character) => void;
}

export const CharacterGridCard = ({ character, onSelect }: Props) => {
  //----> consumiendo Context

  const { isFav, toggleFav } = use(FavoriteCharacterContext);

  return (
    <Card className="group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-linear-to-br from-white to-gray-50">
      <div className="relative h-64 ">
        <img
          src={character.image}
          alt="Superman"
          className="cursor-pointer h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
          onClick={() => onSelect(character)}
        />
      </div>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <h3 className="text-lg font-bold leading-tight">{character.name}</h3>

        <Button
          size="sm"
          variant="ghost"
          className="border border-gray-200 p-2 hover:bg-gray-100"
          onClick={() => toggleFav(character)}
        >
          <Star
            className={`h-4 w-4 ${
              isFav(character) ? "fill-blue-500 text-blue-500" : "text-gray-500"
            }`}
          />
        </Button>
      </CardHeader>
    </Card>
  );
};
