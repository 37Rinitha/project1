// src/App.js
import React from 'react';
import SearchBar from './SearchBar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Country Search</h1>
        <SearchBar />
      </header>
    </div>
  );
};

export default App;
