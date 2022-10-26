import React from "react"
import { useNavigate } from "react-router-dom"
import { goHomePage } from "../../router/coordinator"
import * as C from './styled'
import Localizador from '../../assets/localizador.png'
import Seta from '../../assets/seta.png'
import { GlobalStyle } from "../../Global/GlobalStyle"
import { useState } from "react"
import { useEffect } from "react"
import { ApiService } from "../../api/api"

const LogoTipo = () => {

  const [stores, setStores] = useState([]);
  const [storeLogo, setStoreLogo] = useState('');

  useEffect(() => {
    ApiService.getStores().then(res => {
      setStores(res.data.stores)
      setStoreLogo(res.data.banner);
    });
  }, [])

  const navigate = useNavigate()

  return (
    <C.PaiDeTodos>
      <GlobalStyle />
      <C.DivLogo>
        <C.Logo src={storeLogo} alt="Loja PLUSPDV" />
      </C.DivLogo>
      <C.DivTitulo>
        <h1>Olá, seja<br />
          bem vindo.</h1>
      </C.DivTitulo>
      <C.DivSubtitulo>
        <C.Subtitulo>Antes de continuarmos selecione uma de nossas unidades:</C.Subtitulo>
      </C.DivSubtitulo>
      <C.PaiDeContainer>
        {stores.map((item, index) => (
          <C.CardLojas key={index} onClick={() => {
            ApiService.setStore(item.slug)
            goHomePage(navigate)
          }}>
            <div>
              <C.ImgLocalizador src={Localizador} alt="Localização" />
            </div>
            <C.TextCard>
              <C.NomeLoja>{item.name}</C.NomeLoja>
              <C.LocalLoja>{item.street}</C.LocalLoja>
            </C.TextCard>
            <div>
              <img src={Seta} alt="seguir" />
            </div>
          </C.CardLojas>
        ))}
      </C.PaiDeContainer>

    </C.PaiDeTodos>

  )
}

export default LogoTipo