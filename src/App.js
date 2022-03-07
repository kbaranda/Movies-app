import React, { useEffect, useState} from 'react';
import Movie from './components/Movie';
import PageNav from './components/PageNav';
import Search from './components/Search'
import TopButton from './components/TopButton';


function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  
  const PAGE_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc0dc2db226d7369c3186f56b86a382a&page=";
  
  useEffect(() => {
    getMovies(PAGE_API + currentPage)
  }, []); 

  const getMovies = (API) => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      setMovies(data.results)
    })
  }

  const handleNext = (page) => {
    setCurrentPage(page)
    console.log("next2")
    getMovies(PAGE_API + currentPage)
  }
  const handleBack = (page) => {
    setCurrentPage(page)
    console.log("back2")
    getMovies(PAGE_API + currentPage)
  }

  return (
    <>
      <TopButton 
      />
      <div className="header">
        <Search
        setCurrentPage={setCurrentPage}
        getMovies={getMovies}
        />
      </div>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => (
          <Movie {...movie}
          key={movie.id}
          />
        ))}
      </div>
      <PageNav
      getMovies={getMovies}
      handleNext={handleNext}
      handleBack={handleBack}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;
