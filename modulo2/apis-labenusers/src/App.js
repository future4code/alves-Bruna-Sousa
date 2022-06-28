import React from 'react';
import TelaCadastro from './components/cadastro';
import NovoUsuario from './components/novoUsuario';

export default class App extends React.Component {
  state = {
     telaAtual: "cadrasto" // tela de inicio
   }
  
  trocarTela = () => {
    switch (this.state.telaAtual){
      case "cadrasto": // Chamar <TelaCadratro /> lembrar que isso é um component e ta sendo importado.
        return <TelaCadastro irParaLista={this.irParaLista} />
      case "lista":
        return <NovoUsuario irParaCadrasto={this.irParaCadrasto}  /> // irParaCadrasto={this.irParaCadrasto} props sendo repassada com o mesmo nome!! 
      default:
        return <div>Tela não encontrada</div>

    }
  }  

  irParaCadrasto = () => { // Isso é uma props
    this.setState({telaAtual: "cadrasto"})
  }
  irParaLista = () => {  // Isso é uma props
    this.setState({telaAtual: "lista"})
  }


    //Dentro da div tem  {this.trocarTela()}  chamando o states ou seja o estado da tela.
   render(){
    return (
      <div>    
        {this.trocarTela()} 
      </div>
    )

   }
}

