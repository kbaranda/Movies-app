import React from 'react';
import Movie from './components/Movie';

function App() {
  const movies = ["1", "2", "3"]

  return (
    <div className="App">
      {movies.map((movie) => (
        <Movie />
      ))}
    </div>
  );
}

export default App;
