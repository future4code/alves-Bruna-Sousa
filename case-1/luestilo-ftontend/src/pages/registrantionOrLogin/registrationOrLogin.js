import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../Global/GlobalStyle"
import { goBack, goLogin, goNewAccount1 } from "../../router/coordinator";
import * as C from './styled'
import x from "../../assets/x.png"

const RegistrationOrLogin = () => {

    const navigate = useNavigate()
    return (
        <C.ContainerRegistration>
            <GlobalStyle />
            <header>
                <img onClick={() => goBack(navigate)} src={x}></img>
            </header>
            <div>
                <C.H1>Acesse sua conta ou cadastra-se</C.H1>
                <C.H2>Para continuar o processo de compra escolha uma das opções abaixo.</C.H2>
            </div>
            <C.Cards>
                <C.Button1 onClick={() => goLogin(navigate)}>Já sou cliente</C.Button1>
                <C.Button2 onClick={() => goNewAccount1(navigate)}>Criar uma nova conta</C.Button2>
            </C.Cards>
        </C.ContainerRegistration>
    )
}

export default RegistrationOrLogin