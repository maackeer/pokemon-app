import React from 'react';
import PokemonCard from './components/pokemonCard';
import data from './components/PokemonData';

const getPokemonData = () => {
  return {
    imagen: data.sprites.front_default,
    numero: data.id,
    nombre: data.name,
    altura: data.height,
    peso: data.weight,
  }
}

const App = () => {
  const pokemon = getPokemonData();
  const { imagen, numero, nombre, altura, peso } = pokemon;

  return (
    <div>
      <h1>Pokemon App</h1>
      <PokemonCard 
        imagen={imagen}
        numero={numero}
        nombre={nombre}
        altura={altura}
        peso={peso}
      />
    </div>
  );
}

export default App;
