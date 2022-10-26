import React from "react";
import { useNavigate } from "react-router-dom";
import { goCart } from "../../router/coordinator";
import Voltar from "../../assets/voltar.png"
import { GlobalStyle } from "../../Global/GlobalStyle";
import { Back, Button2, Card, CardButton, InfoTitle, Input, Label, SubTitle, Title } from "./styled";


const NewAccount3 = () => {
   
  
    const navigate = useNavigate()
    return(
        <div>
        <GlobalStyle />
        <header>
            <Back src={Voltar} />
        </header>
        <Title>Passo 3 de 3</Title>
        <InfoTitle>Confirme os seus dados para acesso</InfoTitle>
        <SubTitle>Dados para o acesso</SubTitle>
        <div>
            <Card>
                <Label for="fone">Celular com DDD</Label>
                <Input type="tel" id="fone" name="fone" placeholder="11 99999-9999"></Input>
                <Label for="password">Senha</Label>
                <Input type="password" placeholder="Senha" id="password" />
                <Label for="password">Confirma senha</Label>
                <Input type="password" placeholder="Confirme Senha" id="confirm_password" />

            </Card>
        </div>
        <CardButton>
            <Button2 type="submit"  onClick={() => goCart(navigate)}>Prosseguir</Button2>
        </CardButton>
    </div>
       
    ) 
}

export default NewAccount3