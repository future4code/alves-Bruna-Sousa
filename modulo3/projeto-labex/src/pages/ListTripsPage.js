import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Whatssap from "../imagens/Whatssap.png";
import Instagram from "../imagens/Instagram.png";
import ImagemFoguete from "../imagens/ImagemFoguete.png"
import { createGlobalStyle } from 'styled-components';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import ImagemFundo from "../imagens/fundo-admin.jpg"


 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url(${ImagemFundo}) ;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  button {
    background: rgba(255,255,255,.5);
    border: solid 2px blue;
    width: 110px;
    color: white;
  }
`
const Div = styled.div`
display: grid;
grid-template-rows: 130px 1fr;
align-items: center;
justify-content: center;
text-align: center;
box-sizing: border-box;
position: relative;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
grid-template-rows: 150px 1fr;
}
`
const Card1 = styled.section`

`
const Button = styled.button`
margin-top: 20px ;
margin-left: 60px;
margin-right: 60px;

`
const H1 = styled.h1`
color: white;
font-size: 40px;
margin-bottom: 0%;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
font-size: 30px;
}
`
const H3 = styled.h3`
margin-bottom: 10px;
`
const CardViagens = styled.section`
width: 500px;
background-color: blue;
border: solid 2px black;
margin-top: 20px;
justify-content: center;
align-items: center;
display: grid;
position: relative;
color: white;
margin-bottom: 5px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 80%;
}
`
const Section = styled.section`
display: grid;
align-items: center;
justify-content: center;
justify-items: center; // Foi oq deixou os cards centralizados
`

// Para vermos todas as viagens
export function ListTripsPage() {
 const [dataTrip, setDataTrip] = useState([])
  //sempre fica dentro do data-trips
  
  function buscarViagem  () {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-Vitoria-Alves/trips"
    axios.get(url)
    .then((res) =>{
      console.log(res.data.trips)
      setDataTrip(res.data.trips) // arnazena o valor no meu estado
    }).catch((err) =>{
      console.log(err)
    })
  }
  useEffect (() => { // Usado para o ciclo de vida quando a tela carregar aparecer o componente.
    buscarViagem()
  },[])

 const card = dataTrip.map((trip)=> { // é so um parametro
  // Necessario o key com id para saber que eles não estão se repetindo
  return(
    <CardViagens key={trip.id}> 
      <h2>Nome: {trip.name}</h2>
      <H3>Descrição: {trip.description}</H3>
      <H3>Duração: {trip.durationInDays}</H3>
      <H3>Planeta: {trip.planet}</H3>
      <H3>Data: {trip.date}</H3>
    </CardViagens>
  )
// Obs: esse card vai ser repetido várias vezes

 })
//Navegação dos botões
const navigate = useNavigate()
  const goToForm= () => {
    navigate("/ApplicationFormPage")
  }
  const goToback = () => { // Chamei no then da Api pq o onClick está sendo ultilizada nela.
    navigate(-1)
  }

  return(
    <Div>
      <GlobalStyle/>
      <Card1>
        <Button onClick={goToback}>Voltar</Button>
        <Button onClick={goToForm}>Inscreva-se</Button>
        <H1>Viagens em planetas paralelos</H1>
      </Card1>
      <Section>
      {card}
      </Section>
    </Div>
  )

}
