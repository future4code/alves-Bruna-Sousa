import React from "react";
import { useNavigate } from "react-router-dom";
import Voltar from "../../assets/voltar.png"
import { GlobalStyle } from "../../Global/GlobalStyle";
import { goNewAccount3 } from "../../router/coordinator";
import { Back, Button2, Card, CardButton, InfoTitle, Input, Label, SubTitle, Title } from "./styled";

const NewAccount2 = () => {
    const navigate = useNavigate
        ()
    return (
        <div>
            <GlobalStyle />
            <header>
                <Back src={Voltar} />
            </header>
            <Title>Passo 2 de 3</Title>
            <InfoTitle>Confirme os seus dados pessoais</InfoTitle>
            <SubTitle>Dados pessoais</SubTitle>
            <div>
                <Card>
                    <Label for="name">Nome Completo</Label>
                    <Input type='text' id='name' name='Nome' placeholder="Insira seu nome aqui" />
                    <Label for="cpf">CPF</Label>
                    <Input type='text' id='cpf' name='cpf' placeholder="Insira seu cpf aqui" />
                    <Label for="fone">Celular com DDD</Label>
                    <Input type="tel" id="fone" name="fone" placeholder="11 99999-9999"></Input>
                    <Label for="dtnasc">Data Nasc</Label>
	                <Input type='date' id='dtnasc' name='dtnasc'></Input>

                </Card>
            </div>
            <CardButton>
                <Button2 onClick={() => goNewAccount3(navigate)}>Prosseguir</Button2>
            </CardButton>
        </div>
    )
}

export default NewAccount2