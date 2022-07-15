import React from "react";
import styled from "styled-components";
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

const PaiDeTodos = styled.div`
display: grid;
box-sizing: border-box;
grid-template-rows: 40px 1fr 40px;
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
const PaiDeContainer = styled.main`
display: grid;
justify-content: center;
align-items: center;
`


const Input = styled.input`
border: solid 3px black;
outline: none;
background: none;
color: black;
font-size: 18px;
margin: 10px;
border-radius: 8%;
display: grid;
`
const TextArea = styled.textarea`
border: solid 3px black;
outline: none;
background: none;
color: black;
font-size: 18px;
margin: 10px;
border-radius: 8%;
display: grid;
`

const H1 = styled.h1`
margin: 10px;
color: black;
`


// Admin Criar viagem

function CreateTripPage () {


    return(
        <PaiDeTodos>
            <GlobalStyle/>
        <Header>
            <img src={ImagemFoguete} />
            <h2>Labex</h2>
        </Header>
          <PaiDeContainer>
              <H1>Criar Cadrasto da Viagem</H1>
                <form>
                  <div>
                  <label for="nome"></label>
	                <Input type='text' id='nome' name='nome' placeholder="Escolha um nome" required />
                  </div>
                  <div>
                  <label for="Lugar Da Viagem"></label>
	                <Input type='text' id='Lugar Da Viagem' name='Lugar Da Viagem' placeholder="Nome do lugar" required />
                  </div>
	                <label for="mensagem"></label>
	                <TextArea id="mensagem" name="mensagem" rows="4" cols="30" placeholder="Descrição"></TextArea>
                  <label for="dias"></label>
	                <Input type='number' id='dias' name='dias' placeholder="Quantidade de dias"></Input>
                  <label for="dataDaViagem"></label>
	                <Input type='date' id='dataDaViagem' name='dataDaViagem'></Input>
                </form>
            <button>Avançar</button>
            <button>Voltar</button>
    
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

export default CreateTripPage