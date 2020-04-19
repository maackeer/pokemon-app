import React from 'react';

type PokemonCardProps = {
  imagen: string,
  numero: number,
  nombre: string,
  altura: number,
  peso: number,
};

// arrow-function o funcion flecha
const PokemonCard = (props: PokemonCardProps) => {
  const { imagen, numero, nombre, altura, peso } = props;

  return (
    <div>
      <div>{imagen}</div>
      <div>{numero}</div>
      <div>{nombre}</div>
      <div>{altura}</div>
      <div>{peso}</div>
    </div>
  );
}

export default PokemonCard;
