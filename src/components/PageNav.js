import React from 'react'
import {FiChevronsRight, FiChevronsLeft} from "react-icons/fi"
import "./PageNav.css"
import { toTheTop } from './TopButton';

const PageNav = ({currentPage, setCurrentPage, getMovies}) => {
  const PAGE_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc0dc2db226d7369c3186f56b86a382a&page=";

 const next = () => {
   currentPage++
   setCurrentPage(currentPage)
   getMovies(PAGE_API + currentPage)
  }
  const back = () => {
    currentPage--
    setCurrentPage(currentPage)
    getMovies(PAGE_API + currentPage)
 }

  return (
   <div className="page-navi">
     {currentPage === 1 ? (<FiChevronsLeft onClick={back} style={{display: "none"}}/>) : (<FiChevronsLeft onClick={back} style={{display: "block"}}/>)}
     <h3>{currentPage}</h3>
    <FiChevronsRight onClick={next}/>
   </div>
  )
}

export default PageNav