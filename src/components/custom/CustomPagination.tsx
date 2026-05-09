import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { useSearchParams } from "react-router";
import { usePaginationEnum } from "@/characters/hooks/usePaginationEnum";

interface Props {
  totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryPage = searchParams.get("page") ?? "1";

  const page = isNaN(Number(queryPage)) ? 1 : Number(queryPage);

  // -> Custom hook
  const pages = usePaginationEnum(page, totalPages);

  const handlePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        disabled={page === 1}
        onClick={() => handlePage(page - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
        Anteriores
      </Button>

      {pages.map((pageNum, index) =>
        pageNum === "..." ? (
          <span key={index} className="px-2">
            ...
          </span>
        ) : (
          <Button
            key={index}
            variant={page === pageNum ? "default" : "outline"}
            size="sm"
            onClick={() => handlePage(Number(pageNum))}
          >
            {pageNum}
          </Button>
        ),
      )}

      <Button
        variant="outline"
        size="sm"
        disabled={page === totalPages}
        onClick={() => handlePage(page + 1)}
      >
        Siguientes
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
