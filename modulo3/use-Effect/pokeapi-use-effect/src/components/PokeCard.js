import axios from "axios";
import { useEffect, useState } from "react";


 function PokeCard(props) {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    pegaPokemon(props.pokeName)
  }, [props.pokeName])

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        setPokemon(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };


 return (
  <card>
    <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
    <p>Peso: {pokemon.weight}</p>
    <p>Tipo: {pokemon.types && pokemon.types[0].type.name}</p>
    {pokemon.sprites && (
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    )}
  </card>
);
};

export default PokeCard;
