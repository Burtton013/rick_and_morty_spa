import { useMemo } from "react";

export const usePaginationEnum = (current: number, total: number) => {
  return useMemo(() => {
    const delta = 2;
    const range = [];
    //cc = 10 , delta = 2
    const start = Math.max(2, current - delta); //  limite 2, 8 => retorna 8
    const end = Math.min(total - 1, current + delta); //-> 12

    range.push(1);

    //-> Inicio 1...
    if (start > 2) range.push("..."); // 1, '...'

    for (let i = start; i <= end; i++) {
      range.push(i); // 8, 9 , 10 ,11 , 12
    }

    //-> ...42 Final

    if (end < total - 1) range.push("...");

    range.push(total);

    return range;
  }, [current, total]);
};
