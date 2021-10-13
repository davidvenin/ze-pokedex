import { useState } from "react";
import { PokemonDetails } from "../models/pokemon";
import { getPokemonById } from "../services/pokemon";

export function useGetPokemon() {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  const getPokemon = async (pokemonName: string) => {
    const req = await getPokemonById(pokemonName);
    setPokemon(req);
  };

  return {
    getPokemon,
    pokemon,
  };
}
