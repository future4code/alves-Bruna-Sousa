import React from "react";
import styled from "styled-components";
import axios from "axios";
import userEvent from "@testing-library/user-event";

const CardPlaylist = styled.div`
border: 1x solid purple;
padding: 10px;
margin: 10px;

`
export default class SegundaTela extends React.Component{

    state = {
        playlist: []
    }
    
   componentDidMount() {
    this.pegarPlaylist()
   }

    pegarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=string"
        axios.get(url, {
            headers: {
            Authorization: "Bruna-vitoria-Alves"
        }
        })
        .then((res) =>{
            this.setState({playlist: res.data})
        } )
        .catch((err) => {
            alert("Ocorreu um erro, tente novamente!")
        })
    }


render () {
    const listaDeUsuarios = this.state.playlist.map((play) => {
        return <CardPlaylist>{play.name}</CardPlaylist>

    } )
    return (
        <div>
            <p>Segunda tela</p>
            {listaDeUsuarios}
        </div>
    
    )
}

}