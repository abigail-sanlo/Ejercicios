import logo from './logo.svg';
import './App.css';
import React from 'react';
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from './components/Contadorooks'
import ScrollHooks from './components/ScrollHooks'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>

          <hr />
          {/* <CicloVida /> */}
          <hr />
           <AjaxApis />
          <hr />
          <ContadorHooks titulo="Seguidores" />
          <hr />
          <ScrollHooks />
          <hr />
          {/*<RelojHooks />
          <hr />
          <AjaxHooks />
          <hr />
          <HooksPersonalizados />
          <hr />
          <Referencias />
          <hr />
          <Formularios />
          <hr />
          <Estilos />
          <hr />
          <ComponentesEstilizados /> */}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      </header>
    </div>
  );
}

export default App;
