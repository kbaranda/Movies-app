import React, { useEffect, useState} from 'react';
import Movie from './components/Movie';
import PageNav from './components/PageNav';
import Search from './components/Search'
import TopButton from './components/TopButton';


function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(2)
  
  const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc0dc2db226d7369c3186f56b86a382a";

  useEffect(() => {
    getMovies(FEATURED_API + "&page=1")
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
      <TopButton 
      />
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
      <PageNav
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      getMovies={getMovies}
      />
    </>
  );
}

export default App;
