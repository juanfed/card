import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';



function App() {

  const [mostrar, setMostrar] = useState(false);
  const [result, setResult] = useState({});
  const consultarAPI = async () => {
    setMostrar(true)
    if (true) {
      const url = `https://rickandmortyapi.com/api/character/2`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      if(respuesta.status === 200){
        setResult(resultado);
      }else{
        setResult("error")
        console.log(result)
      }
      console.log(resultado)
      console.log(resultado.name)
      console.log(resultado.image)
      console.log(resultado.species)

    }
  }



  return (
    <div className="App">
      <h1>Card de personajes aleatorios de Rick and Morty</h1>
      <div>
        {(mostrar) ? <Card result={result} /> : null}
      </div>
      <br />
      <button onClick={consultarAPI}>Personaje randon</button>
    </div>
  )
}

export default App;
