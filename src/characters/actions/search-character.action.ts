import { characterApi } from "../api/character.api";

import type { Character } from "../interface/character.interface";
import type { CharactersResponse } from "../interface/get-character-respose";

interface Options {
  name?: string;
}

export const searchCharactersAction = async (
  options: Options = {},
): Promise<Character[]> => {
  const { name } = options;

  if (!name) {
    return [];
  }

  const { data } = await characterApi.get<CharactersResponse>("/", {
    params: {
      name,
    },
  });

  return data.results;
};
