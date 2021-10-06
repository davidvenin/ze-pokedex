import { api } from "../../helpers/api";
import { Pokemon } from "../../models/pokemon";

export async function getAllPokemons() {
  try {
    const req = await api.get("pokemon?limit=151");
    return req.data;
  } catch (e) {
    // display an error in the console with the payload
    console.error("Error on getAllPokemons", e);
    return e;
  }
}

export async function getPokemonById(pokemonId: string) {
  try {
    const req = await api.get(`pokemon/${pokemonId}`);
    return req.data;
  } catch (e) {
    // display an error in the console with the payload
    console.error("Error on getPokemonById", e);
    return e;
  }
}

export async function getPokemonByName(pokemonName: string) {
  try {
    const req = await api.get<Pokemon[]>(`pokemon/${pokemonName}`);
    return req.data;
  } catch (e) {
    // display an error in the console with the payload
    console.error("Error on getPokemonByName", e);
    return e;
  }
}
