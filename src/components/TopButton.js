import React, { useState }from 'react'
import "./TopButton.css"
import {BsArrowUpSquareFill} from "react-icons/bs"

export const toTheTop = () => {
 window.scrollTo({
  top: 0,
  behavior: 'smooth'
 })
}

const TopButton = () => {
  return (
     <BsArrowUpSquareFill onClick={toTheTop} className="top-btn"/>
  )
}

export default TopButton;
