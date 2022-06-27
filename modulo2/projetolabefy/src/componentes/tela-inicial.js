import React from "react";
import styled from "styled-components";
import axios from "axios";

export default class TelaInicial extends React.Component{
state = {
    playlist: ""
}

chamarPlaylist = (event) => {
    this.setState({playlist: event.target.value}) // O nome event vem de dentro das aspas de cima pode ser qualquer nome.

  }

criarPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
        name: this.state.playlist
    }
    axios.post(url,body,{
        headers: {
            Authorization: "Bruna-Vitoria-Alves"
        }
    })
    .then((res) => {
        alert("Playlist cadastrada com sucesso")
        this.setState({playlist: ""})
    } )
    .catch((err) => {
        alert("Verifique se você está botando o nome da playlist repetida ou temos algum erro no sistema")
    })



}  

render () {
    return (
        <div>
           <section>
           <h3>Escreva o nome da playlist que você quer criar: </h3>
           <input 
           placeholder={"Nome da playlist"}
           value={this.state.playlist}
           onChange={this.chamarPlaylist}
           />
           <button onClick={this.criarPlaylist}>Avançar</button>
           <h3>Ir para as minhas playlists</h3>
           <button onClick={this.props.irParaSegundaTela}>playlists</button>
           </section>           
        </div>
    
    )
}

}