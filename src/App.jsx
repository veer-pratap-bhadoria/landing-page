import React from 'react'
import "./App.css";
import Main from './components/Main';
import NavBar from   './components/NavBar';
import About from './components/About';
import How from './components/How';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <About /> 
      <How />
      <Features />
      <Footer />
    </div>
  )
}

export default App