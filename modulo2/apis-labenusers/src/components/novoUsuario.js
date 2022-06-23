import React from "react";
import axios from "axios"
import styled from "styled-components";


const CardUsuaio = styled.div`
border: 1px solid green;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;

`

export default class NovoUsuario extends React.Component {
    state = {
        usuarios: []
    }


   componentDidMount() {
    this.pegarUsuario()   // Vai mostrar no console o objeto
   }
    
    pegarUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get (url, {
            headers: {
                Authorization: "Bruna-Vitoria-Alves"
            }
          
            })
            .then ((res) => {
               this.setState({usuarios: res.data})
               })
            
            
               .catch ((err) => {
                alert("Ocorreu um erro tente novamente!")
            
               })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "Bruna-Vitoria-Alves"
            }
        })
        .then ((res) => {
            alert("Usuário(a) deletado(a) com sucesso!")
            this.pegarUsuario()  // serve para atualizar a tela sem o usuário deletado
            })
         
         
            .catch ((err) => {
             alert("Ocorreu um erro tente novamente!!")
         
            })
    }
    
    render() {
        const listaDeUsuarios = this.state.usuarios.map((user)=> {
            return <CardUsuaio key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>x</button>
                </CardUsuaio>
        })
        return (
            <div>
                <button onClick={this.props.irParaCadrasto}>Ir para cadrasto</button>
                <h2>Lista de usuários</h2>
                {listaDeUsuarios}
            </div>
        )
    }


}