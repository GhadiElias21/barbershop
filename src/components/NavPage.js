import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import Home from '../pages/Home'

function NavPage() {
  return (
    <div>
 <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/location" element={<Contact/>}/>
<Route path="/gallery" element={<Gallery/>}/>

 </Routes>

    </div>
  )
}

export default NavPage