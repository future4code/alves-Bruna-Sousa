import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PokeCard from "./components/PokeCard";
import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background: yellow;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`
const Header = styled.header`
display: flex;
padding: 10px;
background-image: url(https://2.bp.blogspot.com/-FWmXHdmJi3c/WADl_DFqf8I/AAAAAAAABHg/wtx2W8ySN4cBCUto5INr8QwKyUurDxB8gCLcB/s1600/1alola.png);
justify-items: center;
align-items: center;
`
const Div = styled.div`
display: grid;
grid-template-rows: 150px 1fr;

`
const Section = styled.section`
display: grid;
justify-items: center;
align-items: center;
margin: 10px;
font-size: 30px;
`


function App() {
  // Passo 3b
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState ("")

  // Passo 3c
  const pegaLista = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    pegaLista()
  }, [])

  // Passo 3a
  const changePokeName = (event) => {
    // Passo 3d
    setPokeName(event.target.value)
    // Implementa a função aqui.
  };

  // Passo 3e
   const pokeOptions = pokeList.map(pokemon => {
     return (
       <option key={pokemon.name} value={pokemon.name}>
         {pokemon.name}
       </option>
     );
   });

  // Passo 4a
  const pokemon = pokeName && <PokeCard pokeName={pokeName} />;

  return (
    <>
     <GlobalStyle />
    <Div>
      <Header>
        <h1>Exibir Detalhes de Um Pokémon:</h1>
      </Header>

      <Section>
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
         {/* Passo 3a */}
        <select id={"select-pokemon"} onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* Passo 3e */}
          {pokeOptions} 
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
      </Section>
    </Div>
    </>
  );
};

export default App;
