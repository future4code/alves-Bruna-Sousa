import React from "react";
import { useNavigate } from "react-router-dom";
import Voltar from "../../assets/voltar.png"
import { GlobalStyle } from "../../Global/GlobalStyle";
import {  goNewAccount2 } from "../../router/coordinator";
import { Back, Button2, Card, CardButton, InfoTitle, Input, Label, SubTitle, Title } from "./styled";

const NewAccount1 = () => {

  

    const navigate = useNavigate()


    return (
        <div>
            <GlobalStyle />
            <header>
                <Back src={Voltar} />
            </header>
            <Title>Passo 1 de 3</Title>
            <InfoTitle>Confirme os dados de entrega</InfoTitle>
            <SubTitle>Endereço para entrega</SubTitle>
            <div>
                <Card>
                    <Label for="Cep">Cep</Label>
                    <Input type='text' id='Cep' name='Cep' placeholder="xxxxx-xx" />
                    <Label for="rua">Rua</Label>
                    <Input type='text' id='rua' name='rua' placeholder="Rua Pinheiros" />
                    <Label for="numero">Número</Label>
                    <Input type='text' id='numero' name='numero' placeholder="589" />
                    <Label for="complemento">Complemento</Label>
                    <Input type='text' id='complemento' name='complemento' placeholder="Apartamento 234" />
                    <Label for="cidade">Cidade</Label>
                    <Input type='text' id='cidade' name='cidade' placeholder="Teresina" />
                    <Label for="estado">Estado</Label>
                    <Input type='text' id='estado' name='estado' placeholder="Piaui" />
                </Card>
            </div>
            <CardButton>
                <Button2 onClick={() => goNewAccount2(navigate)}>Prosseguir</Button2>
            </CardButton>
        </div>

    )
}

export default NewAccount1