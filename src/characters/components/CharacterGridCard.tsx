import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Character } from "../interface/character.interface";
import { useNavigate } from "react-router";

interface Props {
  character: Character;
}

export const CharacterGridCard = ({ character }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <Card className="group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-linear-to-br from-white to-gray-50">
      <div className="relative h-64 ">
        <img
          src={character.image}
          alt="Superman"
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
          onClick={handleClick}
        />
      </div>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <h3 className="text-lg font-bold leading-tight">{character.name}</h3>

        <Button
          size="sm"
          variant="ghost"
          className="border border-gray-200 p-2 hover:bg-gray-100"
        >
          <Star className="h-4 w-4 fill-blue-500 text-blue-500" />
        </Button>
      </CardHeader>
    </Card>
  );
};
