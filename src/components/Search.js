import React, { useState } from 'react'
import "./Search.css"

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=cc0dc2db226d7369c3186f56b86a382a&query=";


const Search = ({getMovies, setCurrentPage}) => {
 const [searchTerm, setSearchTerm] = useState("")

 const handleSubmit = (e) => {
  e.preventDefault()
  if(searchTerm){
   getMovies(SEARCH_API + searchTerm)
    setSearchTerm('')
  }
 }

 const handleOnChange = (e) => {
  setSearchTerm(e.target.value)
 }

 const takeMeHome = () => {
   getMovies("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc0dc2db226d7369c3186f56b86a382a")
   setCurrentPage(1);
 }

  return (
    <header>
     <h2 className='title' onClick={takeMeHome}>Kat's Movie App</h2>
     <form onSubmit={handleSubmit}>
      <input
      type="search"
      placeholder='Search...'
      className='search'
      value={searchTerm}
      onChange={handleOnChange}
      />
     </form>
    </header>
  )
}

export default Search