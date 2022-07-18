import React from "react";
import { createGlobalStyle } from 'styled-components';
import { useNavigate} from 'react-router-dom'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import TelaAdmin from "../imagens/TelaAdmin.jfif" 


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url(${TelaAdmin}) ;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  button {
    background: rgba(255,255,255,.3);
    border: solid 2px white;
    width: 70px;
    margin-left: 3px;
    color: white;
  }
`
const Div = styled.div `
display: grid;
grid-template-rows: 80px 1fr;
align-items: center;
justify-content: center;
text-align: center;
`
const SectionCard = styled.section`
width: 320px;
border: solid 3px white;
margin-bottom: 5px;
background-color: black;
color: white;
padding: 5px;
`


//Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

export function AdminHomePage () {
  const [dataTrip, setDataTrip] = useState([])
  const [apagado, setApagado] = useState(false)
  const token = localStorage.getItem('token')
 
  const excluirViagem = (id) => {
    console.log(id)
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-Vitoria-Alves/trips/${id}`
    axios.delete(url,{
      headers: {
        auth: token
      }
    }).then((res) => {
      console.log(res.data.success)
      setApagado(res.data.success)
      document.location.reload(true)
      alert("Viagem apagada com sucesso")
    })
    .catch((err) =>{
      console.log(err)
    })
  }

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


  //fazendo o códido a Api do botão excluir:


 const card = dataTrip.map((trip)=> { // é so um parametro
  // Necessario o key com id para saber que eles não estão se repetindo
  // No botão onClick passei a constate do rotes para mudar de página e fiz um aerofafhion passei meu 
  // paramentro trip e botei o id. Para funcionar.
  // Lembrar que para ir para uma página detalhes de um elemento no router tem que ter um id.
 
  return(
    <SectionCard key={trip.id}> 
      <h2> {trip.name}</h2> 
      <button onClick={() => goToTripDetailsPage(trip.id)} >detalhes</button>
      <button onClick={() => excluirViagem(trip.id)}>Excluir</button>
    </SectionCard>
  )
// Obs: esse card vai ser repetido várias vezes

 })

  // chamar o button viagem e ir para página inicial
  const navigate = useNavigate()
  const goToCreateTrip= () => {
    navigate("/CreateTripPage")  
  }
  const goToHome= () => {
    navigate(-2)
  }
//Para ir para uma página detalhes além de mudar o router tem que que ser dessa forma de declarar o naviagte
 const goToTripDetailsPage = (id) => {
    navigate(`/tripDetailsPage/${id}`)
}

  return(
    <Div>
      <GlobalStyle/>
      <section>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClick={goToHome}>Tela Inicial</button>
      </section>
      <section>
      {card}
      </section>
    </Div>
  )
}
