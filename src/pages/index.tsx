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
      {/* should display the list of all pokemons with a components List */}
    </div>
  ); 
};
