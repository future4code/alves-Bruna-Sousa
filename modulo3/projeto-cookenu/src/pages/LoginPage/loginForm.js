import React, { useState } from "react";
import styled from "styled-components";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { PageReceitas } from "../../routes/coordinator";
import { useNavigate } from 'react-router-dom'

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

const Button = styled.button`
width: 80%;

.button.button-custom:hover,.button.button-custom:active {
color: #fff;
background-color: #123456;

}  
`


const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

 const chamarEmail = (event) => {   //Serve para guarda as informações no estado
    setEmail( event.target.value )
  }
 const chamarPassword = (event) => {
    setPassword( event.target.value )
  }
  const navigate = useNavigate()
  function fazerLogin ()  {
  const url = "https://cookenu-api.herokuapp.com/user/login"
 
 
  const body = {
    email: email, // O que foi chamado no input do value.
    password: password
  }
  axios.post(url, body)
  .then((res) => {
    console.log(res)
    PageReceitas(navigate) //Para ir para a página seguinte em caso for true
    localStorage.setItem('token', res.data.token)
    console.log(res.data.token)
  }).catch((err)=> {
    console.log(err.response.data.message)
    alert(err.response.data.message)
  })
}

  const onSubmitForm = (event) => {
    event.preventDefault()
    fazerLogin()
  }

    return (

                <form onSubmit={onSubmitForm}>
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
                  <Button type={"submite"}  onClick={fazerLogin} >Avançar</Button>
                </form>
    )
} 
export default LoginForm