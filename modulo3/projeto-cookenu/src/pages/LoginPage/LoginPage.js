import React from "react";
import Header from "../../components/header";
import { createGlobalStyle } from "styled-components";
import FundoLogin from "../../assets/FundoLogin.jfif"
import styled from "styled-components";
import useForm from "../../hooks/useForm";
import LoginForm from "./loginForm";
import { PageCadastro } from "../../routes/coordinator";
import { useNavigate, useParams } from 'react-router-dom'
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${FundoLogin});

  }
`;
const PaiDeTodos = styled.div`
display: grid;
box-sizing: border-box;
grid-template-rows: 60px 1fr;
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
border: solid 3px black;
align-items: center;
justify-content: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, 50%);
text-align: center;
`
const Input = styled.input`
border: solid 3px black;
outline: none;
background: none;
color: black;
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
const H3 = styled.h3`
margin: 5px;
color: white;
`
const Button = styled.button`
width: 80%;

.button.button-custom:hover,.button.button-custom:active {
color: #fff;
background-color: #123456;

}  
`
const SectionButton = styled.button`
align-items: center;
background: rgba(255,255,255,.1);
border: none;
`

const LoginPage = () => {

  const navigate = useNavigate()
    return (
        <PaiDeTodos>
            <GlobalStyle />
               <Header/>
               <PaiDeContainer>
            <SectionContainer>
              <H1>Faça o login</H1>
              <LoginForm/>
                <SectionButton>
                <H3>Não tem conta ?</H3>
            <Button
            onClick={() => PageCadastro(navigate)}
            >
              Cadastra-se
              </Button>
            </SectionButton>
            </SectionContainer>      
          </PaiDeContainer>
            
        </PaiDeTodos>
    )
} 
export default LoginPage