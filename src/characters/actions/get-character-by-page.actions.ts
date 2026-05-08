import { characterApi } from "../api/character.api";
import type { CharactersResponse } from "../interface/get-character-respose";

export const getCharacterByPageAction = async (
  page: number,
): Promise<CharactersResponse> => {
  const { data } = await characterApi.get<CharactersResponse>(`/?page=${page}`);

  return data;
};

// https://rickandmortyapi.com
