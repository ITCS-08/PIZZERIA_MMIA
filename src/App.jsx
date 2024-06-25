//import { useState } from 'react';
import NavBar from "./components/NavBar";
import Router from "./routes/Router";
//import { PizzaProvider } from './context/ApiPizza.jsx';

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">

        <NavBar />
        <Router />

      </div>
    </>
  )
}

export default App
