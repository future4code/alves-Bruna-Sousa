import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../Global/GlobalStyle"
import { goBack, goCart } from "../../router/coordinator";
import * as C from './styled'
import x from "../../assets/x.png"
import axios from "axios";
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  
   const chamarUsername = (event) => {   //Serve para guarda as informações no estado
      setUsername( event.target.value )
    }
   const chamarPassword = (event) => {
      setPassword( event.target.value )
    }
  
    function fazerLogin ()  {
    const url = "http://159.89.176.78:8001/login/consumidor/"
    // Ir no postman criar Povoar, e incrição com o meu email.
    const body = {
      username: username, // O que foi chamado no input do value.
      password: password
    }
    axios.post(url, body)
    .then((res) => {
      console.log(res)
      goCart(navigate) //Para ir para a página seguinte em caso for true
      alert("Login Realizado com sucesso")
      localStorage.setItem('token', res.data.token)
    }).catch((err)=> {

      alert("Falha")
    })
  }

    const navigate = useNavigate()
    return (
        <C.ContainerLogin>
            <GlobalStyle />
            <header>
                <img onClick={() => goBack(navigate)} src={x}></img>
            </header>
            <div>
                <C.H1>Acessar conta</C.H1>
                <C.H2>Insira os dados da sua compra para poder continuar o processo de compra</C.H2>
            </div>
            <C.Cards>
                <C.Card>
                    <form>
                    <C.NamePhonePassword>Telefone</C.NamePhonePassword>
                    <C.InputPhonePassword onChange={chamarUsername} value={username} type="tel" id="telefone"  required placeholder="(xx) xxxxx-xxxx" />
                    </form>
                </C.Card>
                <C.Card>
                    <form>
                    <C.NamePhonePassword>Password</C.NamePhonePassword>
                    <C.InputPhonePassword onChange={chamarPassword} value={password} type="password" name="password" id="password" placeholder="Digite sua senha" />
                    </form>
                </C.Card>
            </C.Cards>
            <C.Cards>
                <C.Button1>Esqueci minha senha</C.Button1>
                <C.Button2 onClick={fazerLogin}>Entrar</C.Button2>
            </C.Cards>
        </C.ContainerLogin>
    )
}

export default Login