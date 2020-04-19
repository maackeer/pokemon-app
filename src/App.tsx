import React from 'react';
import PokemonCard from './components/pokemonCard';

const App = () => {
  return (
    <div>
      <h1>Pokemon App</h1>
      <PokemonCard 
        imagen="01.jpg"
        numero={1}
        nombre="bulbasaur"
        altura={1.5}
        peso={55}
      />
    </div>
  );
}

export default App;
