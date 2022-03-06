import React from 'react'
import {FiChevronsRight, FiChevronsLeft} from "react-icons/fi"
import "./PageNav.css"
import { toTheTop } from './TopButton';

const PAGE_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc0dc2db226d7369c3186f56b86a382a&page=";
const PageNav = ({currentPage, setCurrentPage,getMovies}) => {
 const back = () => {
  console.log("back")
 }
 const next = () => {
  getMovies(PAGE_API + currentPage)
  setCurrentPage(currentPage+1)
  toTheTop()
 }

  return (
   <div className="page-navi">
    <FiChevronsLeft onClick={back}/>
     <h3>{currentPage-1}</h3>
    <FiChevronsRight onClick={next}/>
   </div>
  )
}

export default PageNav