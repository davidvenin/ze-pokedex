import React, { FunctionComponent } from "react";
import { Pokemon as IPokemon } from "../../models/pokemon";

interface Props {
  pokemon: IPokemon;
}

export const Pokemon: FunctionComponent<Props> = ({ pokemon }: Props) => {
  // if no item in my array, return nothing or a message
  if (!pokemon) return null;
  
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <a href={`/pokemon/${pokemon.name}`}>Link</a>
    </div>
  );
}
