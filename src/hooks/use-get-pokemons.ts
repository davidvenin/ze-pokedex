import { useEffect, useState } from "react";
import { Pokemon } from "../models/pokemon";
import { getAllPokemons } from "../services/pokemon";

export function useGetPokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function asyncGetPokemons() {
      const req = await getAllPokemons();
      setPokemons(req.results);
    }
    asyncGetPokemons();
  }, []) 


  return {
    pokemons,
  };
}
