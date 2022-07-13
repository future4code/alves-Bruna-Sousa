import React from "react";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #dee9f3;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  * {
    margin: 0;
    padding: 0;
  }
`;



// Para o usuário escolher entre Àrea Administrativa e Lista de Viagens

function HomePage() {




return (
    <div>
        <header>
            <img></img>
            <button></button>
        </header>
        <main>
            <h1>A sua viagem para qualquer lugar!</h1>
            <section>
                <h2>Veja a maiores viagens conosco entre em:</h2>
                <button>Lista de Viagens</button>
            </section>
            <section>
                <img></img>
                <button>Login</button>
            </section>
        </main>

    </div>

)


}

export default HomePage;