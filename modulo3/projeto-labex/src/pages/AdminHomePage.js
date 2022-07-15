import styled from "styled-components";
import React from "react";
import Whatssap from "../imagens/Whatssap.png";
import Instagram from "../imagens/Instagram.png";
import ImagemFoguete from "../imagens/ImagemFoguete.png"
import { createGlobalStyle } from 'styled-components';

 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #e0f2fe ;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`


//Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

function AdminHomePage () {
  return(
    <div>
      <button>Criar Viagem</button>
    </div>
  )
}
export default AdminHomePage