import React from "react";
import styled from "styled-components";
import SegundaTela from "./componentes/segunda-tela";
import TelaInicial from "./componentes/tela-inicial";



export default class App extends React.Component {
  state = {
    telaAtual: "inicio" // tela de inicio
  }

trocarTela = () => {
  switch (this.state.telaAtual) {
    case "inicio":
      return <TelaInicial />
    case "segundaTela":
      return <SegundaTela /> 
      default:
        return <div>Tela não encontrada</div> 
  }
  }



  render() {
    return (
      <div>
        {this.trocarTela()}
      </div>
    )
  }

}
