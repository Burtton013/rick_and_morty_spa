export interface Character {
  id: number;
  name: string;
  type: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
