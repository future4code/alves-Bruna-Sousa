import React, { useState } from "react";
import styled from "styled-components";
import Whatssap from "../imagens/Whatssap.png";
import Instagram from "../imagens/Instagram.png";
import ImagemFoguete from "../imagens/ImagemFoguete.png"
import { createGlobalStyle } from 'styled-components';
import axios from "axios";
import { useNavigate } from 'react-router-dom'



 
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

export function CreateTripPage () {
  const [name, setName] = useState("")
  const [planet, setPlanet] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [durationInDays, setDurationInDays] = useState("")
  const token = localStorage.getItem('token')

  const guardarName = (event) => {
    setName( event.target.value )
  }
  const guardarPlanet = (event) => {
    setPlanet( event.target.value )
  }
  const guardarDate = (event) => {
    setDate( event.target.value )
  }
  const guardarDescription = (event) => {
    setDescription( event.target.value )
  }
  const guardarDuration = (event) => {
    setDurationInDays( event.target.value )
  }

  function criarViagem ()  {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-Vitoria-Alves/trips"
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: durationInDays 
    }
    axios.post(url,body, {
      headers: {
        auth: token 
  // Essa auth foi pego no console.log do login.
      }
  
     })
     .then ((res) => {
      alert("Viagem cadrastada com sucesso!")
      console.log(res)
 
     }).catch ((erro) => {
      alert(erro.response.data.massage)
      console.log(erro.response.data.message)
  
     })



  }
  

  const navigate = useNavigate()
  const goToback = () => { 
   navigate(-1)
 }



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
	                <Input type='text' id='nome' value={name} onChange={guardarName} name='nome' placeholder="Escolha um nome" required />
                  </div>
                  <div>
                  <label for="Planeta"></label>
	                <Input type='text' id='Planeta' value={planet} onChange={guardarPlanet} name='Planeta' placeholder="Nome do Planeta" required />
                  </div>
	                <label for="mensagem sobre"></label>
	                <TextArea id="menssagem sobre" name="mensagem sobre" value={description} onChange={guardarDescription} rows="4" cols="30" placeholder="Descrição"></TextArea>
                  <label for="dias"></label>
	                <Input type='number' id='dias' name='dias' value={durationInDays} onChange={guardarDuration} placeholder="Quantidade de dias"></Input>
                  <label for="dataDaViagem"></label>
	                <Input type='date' id='dataDaViagem' name='dataDaViagem' value={date} onChange={guardarDate}></Input>
                </form>
            <button onClick={criarViagem}>Criar Viagem</button>
            <button onClick={goToback}>Voltar</button>
    
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

