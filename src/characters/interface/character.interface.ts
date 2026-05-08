export interface Character {
  id: number;
  name: string;

  status: Status;
  species: Species;
  gender: Gender;

  type: string;

  origin: Location;
  location: Location;

  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface Location {
  name: string;
}

export type Gender = "Female" | "Male" | "unknown" | string;

export type Species = "Alien" | "Human" | string;

export type Status = "Alive" | "Dead" | "unknown" | string;
