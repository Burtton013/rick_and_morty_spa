import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import { useSearchParams } from "react-router";

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") ?? "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (value) {
        params.set("name", value);
      } else {
        params.delete("name");
      }

      return params;
    });
  };

  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />

      <Input
        value={name}
        onChange={handleChange}
        placeholder="Busca tus personajes favoritos..."
        className="pl-12 h-12 text-lg bg-white"
      />
    </div>
  );
};
