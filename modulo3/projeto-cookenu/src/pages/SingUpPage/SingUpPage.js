import React, { useState } from "react";
import Header from "../../components/header";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import CadastroFundo from "../../assets/CadastroFundo.jpg"
import { createGlobalStyle } from "styled-components";
import { PageLogin } from "../../routes/coordinator";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${CadastroFundo});

  }
`;
const Input = styled.input`
border: solid 3px black;
outline: none;
background: none;
color: black;
font-size: 18px;
margin: 10px;
border-radius: 8%;
::-webkit-input-placeholder {
   color: blck;
   font:  verdana, arial, sans-serif;
}

:-moz-placeholder {
   color: black;
   font:  verdana, arial, sans-serif;
}

::-moz-placeholder {
   color: black;  
   font:  verdana, arial, sans-serif;
}

:-ms-input-placeholder {  
   color: white;  
   font: verdana, arial, sans-serif;
}
`

const Button = styled.button`
width: 80%;
margin-bottom: 20px;
text-align: center;
align-items: center;

.button.button-custom:hover,.button.button-custom:active {
color: #fff;
background-color: #123456;

}  
`
const SectionContainer = styled.section`
width: 300px ;
background: #d3b38c;
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
const PaiDeTodos = styled.div`
display: grid;
box-sizing: border-box;
grid-template-rows: 60px 1fr;

`
const PaiDeContainer = styled.main`
position: relative;
    margin: -40px auto 0;
    align-items: center;


`
const H1 = styled.h1`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 50px ;

`
const SectionButton = styled.button`
align-items: center;
background: rgba(255,255,255,.0);
border: none;
`

const SingUpPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
  
   const chamarEmail = (event) => {   //Serve para guarda as informações no estado
      setEmail( event.target.value )
    }
   const chamarPassword = (event) => {
      setPassword( event.target.value )
    }
    const chamarName = (event) => {
        setName( event.target.value )
      }
    function fazerCadastro ()  {
    const url = "https://cookenu-api.herokuapp.com/user/signup"
   
   
    const body = {
      email: email, // O que foi chamado no input do value.
      password: password,
      name: name
    }
    axios.post(url, body)
    .then((res) => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      console.log(res.data.token)
      alert("Usúario cadastrado com sucesso!")
      document.location.reload(true)
    }).catch((err)=> {
      console.log(err.response.data.message)
      alert(err.response.data.message)
    })
  }
  
    const onSubmitForm = (event) => {
      event.preventDefault()
      fazerCadastro()
    }
    const navigate = useNavigate()



    return (
        <PaiDeTodos>
          <GlobalStyle/>
            <Header/>
            <PaiDeContainer>
            <SectionContainer>
                <H1>Cadastro</H1>
                <form onSubmit={onSubmitForm}>
                <Input 
                     type="name" 
                     name={"name"} 
                     onChange={chamarName} 
                     value={name}
                     placeholder="Digite seu nome" 
                     inputmode="name"            
                     />
                    <Input 
                     type="email" 
                     name={"email"} 
                     onChange={chamarEmail} 
                     value={email}
                     placeholder="Digite seu e-mail" 
                     inputmode="email"            
                     />
                   <Input  
                   type="password" 
                   name={"password"}
                   onChange={chamarPassword} 
                   value={password}
                   placeholder="Digite sua senha"
                   />
                   <span class="lnr lnr-eye"></span>
                  <Button type={"submite"}  onClick={fazerCadastro} >Avançar</Button>
                </form>
                <SectionButton>
                <Button  onClick={() => PageLogin(navigate)}>Faça seu login!</Button>
                </SectionButton> 
            </SectionContainer>
            </PaiDeContainer>
        </PaiDeTodos>
    )
} 
export default SingUpPage