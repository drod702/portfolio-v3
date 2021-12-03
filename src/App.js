import React from 'react';
import './App.css';
import About from './components/About';
import Frontend from './components/Frontend';
import Graphics from './components/Graphics';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Skills from './components/Skills';
import Animation from './components/Animation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
        <Home />
      </div>
      <About />
      <Skills />
      <Frontend />
      <Graphics />
      <Animation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
