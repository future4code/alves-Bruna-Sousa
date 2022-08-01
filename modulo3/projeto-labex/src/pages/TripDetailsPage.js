import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ImagemFoguete from "../imagens/ImagemFoguete.png"
import { createGlobalStyle } from 'styled-components';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TelaAdmin from "../imagens/TelaAdmin.jfif"


 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-image: url(${TelaAdmin});
    
  }
  button {
    background: rgba(255,255,255,.5);
    border: solid 2px white;
    width: 60px;
  }
`

const PaiDeTodos = styled.div`
display: grid;
box-sizing: border-box;
grid-template-rows: 40px 60px 1fr ;
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
background: blue;
border-radius: 20px;
box-shadow: 0 5px 15px rgba(0,0,0,.5);
margin: 5%;
display: grid;
border: solid 3px white;
align-items: center;
justify-content: center;
color: white;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 300px;
}
`
const ImagemLogin = styled.img`
width: 80px;

`


// Detalhes

export function TripDetailsPage() {
const navigate = useNavigate()
const token = localStorage.getItem('token')
const params = useParams()
const [detalhesViagem, setDetalhesViagem] = useState([])

const detalheDaViagem = () => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-Vitoria-Alves/trip/${params.id}`
  axios.get(url, {
    headers: {
      auth:token
    }
  })
  .then((res) =>{
    setDetalhesViagem(res.data.trip)
  }).catch((erro) => {

  })
}
useEffect (() => {
  detalheDaViagem()

},[])

const goToback = () => { // Chamei no then da Api pq o onClick está sendo ultilizada nela.
  navigate(-1)
}

return (
 
    <PaiDeTodos>
      <GlobalStyle />
        <Header>
            <img src={ImagemFoguete} />
            <h2>Labex</h2>
        </Header>
          <DivTitulo>
             <button onClick={goToback} >Voltar</button>
          </DivTitulo>
          <PaiDeContainer>
            <SectionContainer>
              <h2>Nome: {detalhesViagem.name}</h2>
              <h2>Planeta: {detalhesViagem.planet}</h2>
              <h2>Descrição: {detalhesViagem.description}</h2>
              <h2>Data: {detalhesViagem.date}</h2>
              <h2>Duração de dias: {detalhesViagem.durationInDays}</h2>
              
     
            </SectionContainer>      
          </PaiDeContainer>
 
    </PaiDeTodos>

)


}

