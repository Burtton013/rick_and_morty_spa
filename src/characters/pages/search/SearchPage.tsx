import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { SearchBar } from "./ui/SearchBar";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Wubba lubba dub dub!"
        subtitle="Base de datos de personajes de Rick & Morty"
      />
      <SearchBar />
    </>
  );
};

export default SearchPage;
