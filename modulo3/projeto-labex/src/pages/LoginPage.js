import React, { useState } from "react";
import styled from "styled-components";
import Whatssap from "../imagens/Whatssap.png";
import Instagram from "../imagens/Instagram.png";
import ImagemFoguete from "../imagens/ImagemFoguete.png"
import { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import TelaLogin from "../imagens/TelaLogin.jpg"



 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${TelaLogin}) ;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  button {
    background: rgba(255,255,255,.5);
    border: solid 2px white;
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
position: relative;

`
const SectionContainer = styled.section`
width: 300px ;
background: rgba(255,255,255,.1);
height: 300px;
border-radius: 20px;
box-shadow: 0 5px 15px rgba(0,0,0,.5);
display: grid;
border: solid 3px white;
align-items: center;
justify-content: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, 50%);
text-align: center;
`

const Input = styled.input`
border: solid 3px white;
outline: none;
background: none;
color: white;
font-size: 18px;
margin: 10px;
border-radius: 8%;
::-webkit-input-placeholder {
   color: white;
   font:  verdana, arial, sans-serif;
}

:-moz-placeholder {
   color: white;
   font:  verdana, arial, sans-serif;
}

::-moz-placeholder {
   color: white;  
   font:  verdana, arial, sans-serif;
}

:-ms-input-placeholder {  
   color: white;  
   font: verdana, arial, sans-serif;
}
`
const H1 = styled.h1`
margin: 10px;
color: white;
`


// Para fazer login

 export function LoginPage () {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

 const chamarEmail = (event) => {   //Serve para guarda as informações no estado
    setEmail( event.target.value )
  }
 const chamarPassword = (event) => {
    setPassword( event.target.value )
  }

  function fazerLogin ()  {
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-Vitoria-Alves/login"
  // Ir no postman criar Povoar, e incrição com o meu email.
  const body = {
    email: email, // O que foi chamado no input do value.
    password: password
  }
  axios.post(url, body)
  .then((res) => {
    console.log(res)
    goToAdmin(navigate) //Para ir para a página seguinte em caso for true
    localStorage.setItem('token', res.data.token)
    console.log(res.data.token)
  }).catch((err)=> {
    console.log(err.response.data.message)
    alert(err.response.data.message)
  })
}
//Fazer a chamada da função fazerlogin no botão enviar

const navigate = useNavigate()
  const goToAdmin= () => {
    navigate("/AdminHomePage")
  }
  const goToback = () => { // Chamei no then da Api pq o onClick está sendo ultilizada nela.
    navigate(-1)
  }
// Falta fazer o négocio de guarda informções no pc local

    return(
        <PaiDeTodos>
            <GlobalStyle/>
        <Header>
            <img src={ImagemFoguete} />
            <h2>Labex</h2>
        </Header>
          <PaiDeContainer>
            <SectionContainer>
              <H1>Faça o login</H1>
                <form>
                  <div>
                    <Input onChange={chamarEmail} value={email} type="email" name="email" placeholder="Digite seu e-mail" inputmode="email" />
                  </div>
                  <div>
                   <Input onChange={chamarPassword} value={password} type="password" name="password" placeholder="Digite sua senha" />
                   <span class="lnr lnr-eye"></span>
                  </div>
                </form>
            <button onClick={fazerLogin}>Avançar</button>
            <button onClick={goToback}>Voltar</button>
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

