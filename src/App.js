import React from 'react';
import Navbar from './components/navbar'
import Home from './components/home'
import './styles/app.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>
      <Home />
    </div>
  );
}

export default App;
