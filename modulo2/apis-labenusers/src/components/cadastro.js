import axios from "axios";
import React from "react";

//Dentro do botão onClick={props.irParaLista} Estou chamando a props da tela inicial
//Sempre quando tiver em component de classe usar o "this."
// Placehouder siginifica uma variavel vazia prontoo para ser preenchida
export default class TelaCadastro extends React.Component {
  state = {
    nome: "",
    email: ""
  }

  chamarNome = (event) => {
    this.setState({nome: event.target.value}) // O nome event vem de dentro das aspas de cima pode ser qualquer nome.

  }

  chamarEmail = (event) => {
    this.setState({email: event.target.value})
  }

  fazerCadrasto = () => {
   // console.log(this.state) // Testar se está guardando as informações
   const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
   const body = {
    name: this.state.nome,
    email: this.state.email // poderia botar email: "" mas vou botar de acordo com state de cima.
   }
   axios.post(url,body, {
    headers: {
      Authorization: "Bruna-Vitoria-Alves"

    }

   })
   .then ((res) => {
    alert("Usuário cadrastado com sucesso!")
    this.setState({nome: "", email: "" }) // limpa os campos para poder cadrastrar outra pessoa depois
   })


   .catch ((err) => {
    alert(err.response.data.message)

   })

  }




// OnChangue está chamando a função
  render() {
    return (
      <div>
        <button onClick={this.props.irParaLista}>Ir para lista de cadrasto</button>
        <h2>Cadrasto</h2>
        <input 
        placeholder={"Nome"}
        value={this.state.nome}
        onChange={this.chamarNome}
        />
        <input 
        placeholder={"E-mail"}
        value={this.state.email}
        onChange={this.chamarEmail}
        />
        <button onClick={this.fazerCadrasto}>Cadrastar</button>

      </div>
    )
  }
 
}


    