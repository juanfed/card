import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';



function App() {
  let randon = Math.trunc(Math.random() * 1000);
  if(randon > 810){
    while(randon > 810){
      randon = Math.trunc(Math.random() * 1000);
    }
  }
  const [mostrar, setMostrar] = useState(false);
  const [result, setResult] = useState({});
  const consultarAPI = async () => {
    setMostrar(true)
    if (true) {
      const url = `https://rickandmortyapi.com/api/character/${randon}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      if(respuesta.status === 200){
        setResult(resultado);
      }else{
        setResult("error")
        console.log(result)
      }
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
