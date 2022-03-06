import React, { useEffect, useState} from 'react';
import Movie from './components/Movie';
import Search from './components/Search'
import TopButton from './components/TopButton';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc0dc2db226d7369c3186f56b86a382a&page=1";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API)
  }, []);

  const getMovies = (API) => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      setMovies(data.results)
    })
  }



  return (
    <>
      <TopButton />
      <Search
      getMovies={getMovies}
      />
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => (
          <Movie {...movie}
          key={movie.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
