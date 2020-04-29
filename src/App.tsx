import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PokemonList} />
        <Route path="/pokemon/:name" component={PokemonDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
