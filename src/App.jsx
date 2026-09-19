import React from 'react'
import "./App.css";
import Main from './components/Main';
import NavBar from   './components/NavBar';
import About from './components/About';
import How from './components/How';

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <About /> 
      <How />
    </div>
  )
}

export default App