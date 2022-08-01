import axios from "axios";
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from 'styled-components'
import { GlobalStyleComponent } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  * {
  margin: 0;
    padding: 0;
  }
`
const Header = styled.header`
background-color: red;
`
const Footer = styled.footer`
background-color: red;
display: flex;
position: fixed;
bottom: 0;
width: 100%;
transform: translateY();
`

const DivPerfil = styled.section`
display: flex;
flex-direction: column;
align-items: center;
border: solid 5px black;
`
const Img = styled.img`
width: 400px;
height: 400px;
`

const DivPai = styled.div`
display: grid;
grid-template-rows: 60px 1fr 40px;
`

export default function App() {

  const [perfil, setPerfil] = useState({})
  // const [telaAtual, setTelaAtual] = useState("")


  const PegaPerfis = () => {
    console.log("entrou PegaPerfis")

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/olavo-marques-alves/person"
    axios.get(url)
      .then((res) => {
        console.log(res.data.profile)
        setPerfil(res.data.profile)
      })
      .catch((erro) => {
        console.log("entrou no erro")
        console.log(erro.response)
      })
  }

  const PegaMatch = () => {
    console.log("entrou PegaMatch")

    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/olavo-marques-alves/matches`
    axios.get(url)
      .then((res) => {
        // console.log(res)
        // setPerfil(res)
      })
      .catch((erro) => {
        console.log("entrou no erro")
        console.log(erro.response)
      })
  }

  useEffect(() => {
    console.log("useEffect")
    PegaPerfis()
    PegaMatch()
  }, [])

  return (
    <DivPai>
      <GlobalStyle />
      <Header>
        <h1>AstroMatch</h1>
        <button>pagina2</button>
      </Header>
      <DivPerfil>
        <h3>Astro Match</h3>
        <h4>Perfis</h4>
        <p>Nome: {perfil.name}</p>
        <p>Idade:{perfil.age}</p>
        <p>{perfil.bio}</p>
        <Img src={perfil.photo} alt={perfil.photo_alt}></Img>
      </DivPerfil>
      <Footer>
       <h1> Encontre o amor da sua vida aqui!</h1>
      </Footer>
 
    </DivPai>
  );
}
