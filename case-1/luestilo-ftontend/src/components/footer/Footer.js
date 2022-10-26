import React from 'react'
import { useNavigate } from 'react-router-dom'
import {  MainDiv, Text } from './Styled'
import shoppingCart from '../../assets/shopping-cart.png'
import homePage from '../../assets/homepage.png'
import avatar from '../../assets/avatar.png'
import { goCart, goHomePage } from '../../router/coordinator'


export default function Footer(props) {
    const navigate = useNavigate()

    return (
        <MainDiv>
            <div>
                <button
                    onClick={() =>  goCart(navigate)}
                >
                    <img src={shoppingCart} /> 
                <Text>Carrinho</Text>
                </button>
            </div>
            <div>
                <button
                    onClick={() => goHomePage(navigate)}
                >
                    <img src={homePage} />
                    <Text>Página Inicial</Text>
                </button>
            </div>
            <div>
                <button
                    onClick={() => goHomePage(navigate)}
                >
                    <img src={avatar} />
                    <Text>Perfil</Text>
                    </button>
            </div>
        </MainDiv>
    )
}
