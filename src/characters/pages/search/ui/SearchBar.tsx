import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />

      <Input
        placeholder="Busca tus personajes favoritos..."
        className="pl-12 h-12 text-lg bg-white"
        autoFocus
      />
    </div>
  );
};
