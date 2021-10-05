import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

export const Pokemon: FunctionComponent = () => {
  const { pokemonId } = useParams()
  return (
    <div>
      Pokemon ID: {pokemonId}
    </div>
  ); 
};
