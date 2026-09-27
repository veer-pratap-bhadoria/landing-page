import React from 'react'
import "./App.css";
import Main from './components/Main';
import About from './components/About';
import How from './components/How';
import Features from './components/Features';
import Footer from './components/Footer';
import Navigation from './Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Main />
      <About /> 
      <How />
      <Features />
      <Footer />
    </div>
  )
}

export default App