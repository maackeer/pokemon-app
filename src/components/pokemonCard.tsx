import React from 'react';
import "./pokemonCard.scss";

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
  tipos?: PokemonType[],
};

// arrow-function o funcion flecha
const PokemonCard = (props: PokemonCardProps) => {
  const { imagen, numero, nombre, tipos } = props;

  return (
    <div className="card">
      <div className="pokemon-image">
        <img src={imagen} /> 
      </div>
      <div className="pokemon-number">No. {numero}</div>
      <div className="pokemon-name">{nombre}</div>
      <div className="pokemon-types">
        {
          tipos && tipos.map(tipo => 
            <span className={`pokemon-type ${tipo.type.name}`}>{tipo.type.name}</span>
          )
        }
      </div>  
    </div>
  );
}

export default PokemonCard;
