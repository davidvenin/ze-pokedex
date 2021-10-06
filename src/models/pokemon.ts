export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonDetails {
  name: string;
  id: number;
  types: Type[];
  height: number;
  weight: number;
  image: string;
}

export interface Pokemon {
  name: string;
  url: string;
}

