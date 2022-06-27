import React from "react";
import styled from "styled-components";
import SegundaTela from "./componentes/segunda-tela";
import TelaInicial from "./componentes/tela-inicial";



const ParteDeCima = styled.header`
display: flex;
background-color: purple;
justify-content: center;
align-items: center;
text-shadow: #000 2px 3px 2px;
color: white;
margin: 0%;
`
const Sessao = styled.div`
display: flex;
background-color: white;
color: black;
width: 100%;
text-align: center;
height: 100%;
`
const ParteDeBaixo = styled.footer`
  display: flex;
  width: 100%;
	min-height: 50px;
	background-color: purple;
	text-align: center;
  justify-content: center;
	color: white;
  text-shadow: #000 2px 3px 2px;
  margin: 0%;
  position: fixed;
  bottom: 0;
  width: 100%;;
`
export default class App extends React.Component {
  state = {
    telaAtual: "inicio" // tela de inicio
  }

trocarTela = () => {
  switch (this.state.telaAtual) {
    case "inicio":
      return <TelaInicial irParaSegundaTela={this.irParaSegundaTela}/>
    case "segundaTela":
      return <SegundaTela irParaInicio={this.irParaInicio}/> 
      default:
        return <div>Tela não encontrada</div> 
  }
  }
  irParaInicio = () => { // Isso é uma props
    this.setState({telaAtual: "inicio"})
  }
  irParaSegundaTela = () => {  // Isso é uma props
    this.setState({telaAtual: "segundaTela"})
  }


  render() {
    return (
      <div>
        <ParteDeCima>
            <h2>Sua playlist aqui!</h2>
        </ParteDeCima>
        <Sessao>
        {this.trocarTela()}
        </Sessao>
        <ParteDeBaixo>
          <h2>LaPlayer sempre com você.</h2>
        </ParteDeBaixo>
      </div>
    )
  }

}
