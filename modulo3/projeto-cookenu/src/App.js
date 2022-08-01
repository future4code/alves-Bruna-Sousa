import React from "react";
import Router from "./routes/Router";
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Router />
    </div>
  );
}

export default App;
