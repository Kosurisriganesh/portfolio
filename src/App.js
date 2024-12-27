import React from 'react';
import Heading from './Components/Heading/Heading';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;