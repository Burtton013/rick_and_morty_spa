import type { Character } from "../interface/character.interface";
import { CharacterGridCard } from "./CharacterGridCard";
interface Props {
  characters: Character[];
}
export const CharacterGrid = ({ characters }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {characters.map((character) => (
        <CharacterGridCard key={character.id} character={character} />
      ))}
    </div>
  );
};
