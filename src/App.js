import logo from './logo.svg';
import './App.css';
import Weather from './component/Weather/Weather';
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
    </div>
  );
}

export default App;
