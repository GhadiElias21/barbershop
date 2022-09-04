import React from 'react'
import classes from './NavBar.module.css'
import {NavLink} from 'react-router-dom'
import Image from '../assets/logoo.jpg'
function navBar() {
  return (
    <main className={classes.main}>
      
    <nav className={classes.header}>
    <img     width='200px' height="150px"className={classes.img}  alt=""src={ Image}/>
   
    <ul className={classes.nav}>
      
     <li><NavLink className={(navData)=>navData.isActive? classes.active:classes.notactive} to="/home">Home</NavLink></li>
     <li><NavLink  className={(navData)=>navData.isActive? classes.active:classes.notactive} to="/gallery">Gallery</NavLink></li>
     <li><NavLink  className={(navData)=>navData.isActive? classes.active:classes.notactive} to="/location">Location</NavLink></li>
    
    </ul>
    
    </nav>
    
    </main>
  )
}

export default navBar