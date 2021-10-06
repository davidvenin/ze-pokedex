import React, { useEffect } from "react";
import { getAllPokemons } from "../services/pokemon";

export const Home = () => {

  useEffect(() => {
    // on homepage, I only want all pokemons
    getAllPokemons();
  }, []);

  return (
    <div>
      Homepage
    </div>
  ); 
};
