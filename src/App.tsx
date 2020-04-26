import React from 'react';
import PokemonCard from './components/pokemonCard';
import data from './components/PokemonData';
import './App.scss';
import { getPokemonId } from './utils/pokemonIdConverter';

type PokemonType = {
  slot: number,
  type: {
    name: string,
    url: string,
  },
}

type PokemonCardProps = {
  imagen: string,
  numero: string,
  nombre: string,
  tipos: PokemonType[],
};

const getPokemonData = (pokemonId: number) => {
  return {
    imagen: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getPokemonId(pokemonId)}.png`,
    numero: getPokemonId(pokemonId),
    nombre: data.name,
    tipos: data.types,
  }
}

const renderPokemonCards = (numeroPokemons: number) => {
  const pokemonCards = [];

  for (let i = 0; i < numeroPokemons; i++) {
    const pokemon = getPokemonData(i + 1)

    pokemonCards.push(
      <PokemonCard 
        imagen={pokemon.imagen}
        numero={pokemon.numero}
        nombre={pokemon.nombre}
        tipos={pokemon.tipos}
      />
    )
  }

  return pokemonCards;
}

const App = () => {
  return (
    <div>
      <h1>Pokemon App</h1>
      <div className="pokemon-card-wrapper">
        { renderPokemonCards(100) }
      </div>
    </div>
  );
}

export default App;
