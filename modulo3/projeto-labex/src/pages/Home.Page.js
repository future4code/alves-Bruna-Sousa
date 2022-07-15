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
grid-template-rows: 40px 13% 1fr 40px;
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
color: white;
`
const PaiDeContainer = styled.main`
display: flex;
justify-content: center;
align-items: center;
justify-content: space-evenly;
`
const SectionContainer = styled.section`
width: 300px ;
background: rgba(255,255,255,.2);
height: 300px;
border-radius: 20px;
box-shadow: 0 5px 15px rgba(0,0,0,.5);
margin: 5%;
display: grid;
border: solid 3px white;
grid-template-rows: 50% 50%;
align-items: center;
justify-content: center;
`
const ImagemLogin = styled.img`
width: 80px;

`
const Footer = styled.footer`
display: flex;
position: fixed;
bottom: 0%;
width: 100%;
background-color: blue;
border-radius: 8px;
border: solid 2px black;
justify-content: center;
align-items: center;
height: 40px;
color: white;
`
const NumeroFooter = styled.p`
padding-right: 5px;
`

// Para o usuário escolher entre Àrea Administrativa e Lista de Viagens

function HomePage() {


return (
 
    <PaiDeTodos>
      <GlobalStyle />
        <Header>
            <img src={ImagemFoguete} />
            <h2>Labex</h2>
        </Header>
          <DivTitulo>
             <h1>A sua viagem para qualquer lugar!</h1>
          </DivTitulo>
          <PaiDeContainer>
            <SectionContainer>
            <section>  
                <img src={ListaViagens} alt="Quer conhecer nossa viagens entre em: " />
              </section>  
              <section>
                <button>Viagens</button>
              </section> 
            </SectionContainer>
            <SectionContainer>
              <section>  
                <ImagemLogin src={Login} alt="Você é um administrador da nossa página entre em: " />
              </section>  
              <section>
                <button>Login</button>
              </section>    
            </SectionContainer>      
          </PaiDeContainer>
        <Footer>
          <h4>Contatos: </h4>
          <NumeroFooter>(86) 99999-9999 </NumeroFooter>
          
          <a href="https://web.whatsapp.com" target="_blank"> 
          <img src={Whatssap} />
          </a>
          <a href="https://www.instagram.com" target="_blank">
          <img src={Instagram} />
          </a>
        </Footer>
    </PaiDeTodos>

)


}

export default HomePage;