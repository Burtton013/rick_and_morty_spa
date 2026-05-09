import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { Character } from "@/characters/interface/character.interface";

interface Props {
  open: boolean;
  onOpen: (open: boolean) => void;
  character: Character | null;
}

export const CharacterModal = ({ open, onOpen, character }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpen}>
      <DialogContent className="max-w-md rounded-2xl p-6 bg-white text-black border shadow-xl">
        <div className="flex flex-col items-center gap-3">
          <img
            src={character?.image}
            className="w-40 h-40 rounded-xl object-cover border"
          />

          <DialogTitle className="text-xl font-bold text-center">
            {character?.name}
          </DialogTitle>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4 justify-items-center w-full">
          <Badge className="bg-sky-200 text-sky-900 w-full justify-center wrap-break-word text-center">
            Estatus: {character?.status}
          </Badge>

          <Badge className="bg-purple-200 text-purple-900 w-full justify-center wrap-break-word text-center">
            Género: {character?.gender}
          </Badge>

          <Badge className="bg-green-200 text-green-900 w-full justify-center wrap-break-word text-center">
            Especie: {character?.species}
          </Badge>

          <Badge className="bg-yellow-200 text-yellow-900 w-full flex justify-center overflow-hidden">
            <span className="truncate max-w-full">Origen: {character?.origin?.name}</span>
          </Badge>

          <Badge className="bg-orange-200 text-orange-900 col-span-2 w-full justify-center wrap-break-word text-center">
            Ubicación: {character?.location?.name}
          </Badge>
        </div>
      </DialogContent>
    </Dialog>
  );
};
