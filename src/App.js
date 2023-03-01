
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import React, { useState } from 'react';

function App() {
  const [mode, setmode] = useState('light')
  const togglemode =() => {
    if(mode === 'dark'){
      setmode('light')
      document.body.style.backgroundColor='white';
    }
    else{
      setmode('dark')
      document.body.style.backgroundColor='gray';
    }
  }

  return (
    <div className="App">
      <Header mode={mode} togglemode={togglemode}/>
      <Body mode={mode} togglemode={togglemode}/>
      <Footer mode={mode} togglemode={togglemode} />
    </div>
  );
}

export default App;
