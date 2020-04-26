export const getPokemonId = (pokemonId: number): string => {
  
  let newId;
  if (pokemonId < 10) {
    newId = `00${pokemonId}`;  
  } else if (pokemonId < 100){
    newId = `0${pokemonId}`
  } else {
    return '' + pokemonId;
  }

  return newId;
}