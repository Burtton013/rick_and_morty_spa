import { characterApi } from "../api/character.api";
import type { CharactersResponse } from "../interface/get-character-respose";

export const getCharacterByPageAction = async (
  page: number,
): Promise<CharactersResponse> => {
  if (isNaN(page)) {
    page = 1;
  }

  const { data } = await characterApi.get<CharactersResponse>(`/`, {
    params: {
      page,
    },
  });

  return data;
};
