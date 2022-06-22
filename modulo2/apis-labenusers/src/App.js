import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {

  }
 // const request = axios.get('', {
 //   headers: {
 //     Authorization: ''
 //   }
 //  })
   
   
   
   
   render () {
    return (
      <div>
        <div>
        <button>Trocar de Tela</button>
        </div>
        <div>
          <imput type="text">Escreva seu nome</imput>
          <imput type="text">Escreva seu emeil</imput>
          <button>Entrar</button>
        </div>
      </div>
    )

   }
}

