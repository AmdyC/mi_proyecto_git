import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const name="Andy";
  const [is_female, setIs_female] = useState(true);
  
  const welcomeGender = () => {
    return is_female ? "Bienvenida" : "Bienvenido";
  }
  const handleClick = () => {
    setIs_female(!is_female); 
  }
  //Hig
  return (
    <div className="App">
      <header className="App-header">
        <h3>{welcomeGender()} a la pagina de {name}</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo!
        </p>
        <button className="App-button" onClick={handleClick}>Género</button>
      </header>
    </div>
  );
}

export default App;
