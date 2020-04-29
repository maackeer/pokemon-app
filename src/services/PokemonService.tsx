// @ts-ignore
const MAX_POKEMON_LIMIT = 30;
const BASE_URL = 'https://pokeapi.co/api/v2';

const fetchPokemons = async (pageNumber: number) => {
  const response = await fetch(`${BASE_URL}/pokemon`);
  const { results } = await response.json();

  return results;
}

export default fetchPokemons;
