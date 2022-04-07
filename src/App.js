import React from 'react';
import Body from './body/Body';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top-bar">Redux Fundamentals Example</div>
      <div className="todos">Todos</div>
      <Body />
    </div>
  );
}

export default App;
