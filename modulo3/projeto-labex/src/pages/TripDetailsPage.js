import styled from "styled-components";
import React from "react";
import ImagemFoguete from "../imagens/ImagemFoguete.png"
import { createGlobalStyle } from 'styled-components';
import Whatssap from "../imagens/Whatssap.png";
import Instagram from "../imagens/Instagram.png";
import ListaViagens from "../imagens/ListaViagens.png"
import Login from "../imagens/Login.png";
import TelaInicio from "../imagens/TelaInicio.jpg"

 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

const PaiDeTodos = styled.div`
display: grid;
box-sizing: border-box;
grid-template-rows: 40px 13% 1fr ;
`
const Header = styled.header`
background-color: blue;
border-radius: 8px;
border: solid 2px black;
display: flex;
align-items: center;
color: white;
height: 40px;
`

const DivTitulo = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: black;
`
const PaiDeContainer = styled.main`
display: flex;
justify-content: center;
align-items: center;
justify-content: space-evenly;
`
const SectionContainer = styled.section`
width: 400px ;
background: black;
height: 300px;
border-radius: 20px;
box-shadow: 0 5px 15px rgba(0,0,0,.5);
margin: 5%;
display: grid;
border: solid 3px white;
align-items: center;
justify-content: center;
color: white;
`
const ImagemLogin = styled.img`
width: 80px;

`


// Para o usuário escolher entre Àrea Administrativa e Lista de Viagens

function TripDetailsPage() {


return (
 
    <PaiDeTodos>
      <GlobalStyle />
        <Header>
            <img src={ImagemFoguete} />
            <h2>Labex</h2>
        </Header>
          <DivTitulo>
             <button>Voltar</button>
          </DivTitulo>
          <PaiDeContainer>
            <SectionContainer>
            <section>  
              <h2>Oi</h2>
              </section> 
            </SectionContainer>
            <SectionContainer>
              <section>  
                <h2>Oi</h2>

              </section>    
            </SectionContainer>      
          </PaiDeContainer>
 
    </PaiDeTodos>

)


}

export default TripDetailsPage;