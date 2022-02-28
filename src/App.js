import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './App.css';
import Card from './components/Card';

function App() {
  let randon = Math.trunc(Math.random() * 1000);
  if (randon > 810) {
    while (randon > 810) {
      randon = Math.trunc(Math.random() * 1000);
    }
  }
  const [number, setNumber] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [mostrar, setMostrar] = useState(true);
  const consultar = () =>{
    setNumber(randon)
  }


  return (
    <Provider store={store}>
      <div className="App">
        <h1 className='App--title'>Card de personajes aleatorios de Rick and Morty</h1>
        <div>
          {(mostrar) ? <Card number={number} /> : null}
        </div>
        <br />
        <button onClick={consultar} className="App--boton">Personaje randon</button>
      </div>
    </Provider>
  )
}

export default App;
