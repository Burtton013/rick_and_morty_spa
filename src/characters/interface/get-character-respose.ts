import type { Character } from "./character.interface";
export interface CharactersResponse {
  info: Info;
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
