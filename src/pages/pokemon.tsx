import React, { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetPokemon } from "../hooks/use-get-pokemon-";

export const Pokemon: FunctionComponent = () => {
  const { pokemonId } = useParams()
  const { getPokemon, pokemon } = useGetPokemon();

  useEffect(() => {
    getPokemon(pokemonId);
  }, []);

  return (
    <div>
      <img src={pokemon?.sprites.front_shiny} alt={pokemon?.name} />
      Pokemon: {pokemonId}
    </div>
  ); 
};
