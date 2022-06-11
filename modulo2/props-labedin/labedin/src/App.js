import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import minhaFoto from "./components/minha-foto/minha-foto.jpeg";
import CardPequeno from './components/CardPequeno/CardPequeno'
import styledComponents from 'styled-components';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhaFoto} 
          nome="Astrodev" 
          descricao="Oi, eu sou a Bruna. Sou estudante da Labenu do curso full-stack, no momento aprendendo front-end. Tenho 22 anos, e faço faculdade engenharia de software. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          nome="Emeil:"
          descricao="bruna000@hotmail.com"
      />

        <CardPequeno 
          nome="Endereço:"
          descricao="Teresina, bairro: gurupi e casa: 0000"
      />

      </div>




      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Estudante" 
          descricao="Não tenho experiências. Sou estudante!" 
        />
        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
