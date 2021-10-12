import React from "react";
import { List } from "../components/list";
import { useGetPokemons } from "../hooks/use-get-pokemons";

export const Home = () => {
  const { pokemons } = useGetPokemons();
  return (
    <div>
      <List pokemonList={pokemons} />
    </div>
  ); 
};
