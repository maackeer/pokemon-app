import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/pokemonCard';
import './pokemonList.scss';
import { getPokemonId } from '../utils/pokemonIdConverter';
import fetchPokemons from '../services/PokemonService';

type Pokemon = {
  numero: string,
  imagen: string,
  nombre: string,
}

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>([]);

  useEffect(() => {
    async function getPokemons() {
      const list = await fetchPokemons(1);
       // @ts-ignore
      const pokemonInfo = list.map(pokemon => {
        const pokemonId = pokemon.url.split('/')[6];
        const pokemonNumber = getPokemonId(pokemonId);
        const imagen = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonNumber}.png`;

        return {
          numero: pokemonNumber,
          imagen,
          nombre: pokemon.name
        };
      });

      setPokemons(pokemonInfo);
    }

    getPokemons();
  }, []);

  return (
    <div>
      <h1>Pokemon App</h1>
      <div className="pokemon-card-wrapper">
        { 
          pokemons && pokemons.map(pokemon => {
            return (
              <PokemonCard
                nombre={pokemon.nombre}
                imagen={pokemon.imagen}
                numero={pokemon.numero}
              />
            );
          })
        }
      </div>
    </div>
  );

};

export default PokemonList;
