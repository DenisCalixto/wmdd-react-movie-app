import React from 'react';
import './App.css';
import MoviesContainer from './containers/MoviesContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>React Movies App</h1>
      </header>
      <MoviesContainer category={"now_playing"} />
    </div>
  )
}

export default App;
