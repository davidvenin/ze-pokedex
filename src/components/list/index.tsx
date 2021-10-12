import React, { FunctionComponent } from "react";
import { Pokemon as IPokemon } from "../../models/pokemon";
import { Pokemon } from "../pokemon";

interface Props {
  pokemonList: IPokemon[];
}

export const List: FunctionComponent<Props> = ({ pokemonList }: Props) => {
  // if no item in my array, return nothing or a message
  if (pokemonList.length === 0) return null;
  
  return (
    <div>
      {pokemonList.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon} />)}
    </div>
  );
}
