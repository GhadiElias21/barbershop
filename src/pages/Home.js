import React, { useState } from 'react'
import classes from './home.module.css'
import TypeWriterEffect from 'react-typewriter-effect';
import Booking from '../components/Booking'
import {FaInstagram } from 'react-icons/fa';
import {FaLinkedin} from  'react-icons/fa'
function Home() {
const [formOpen,setFormOpen]=useState(false)


function onChangeForm(formIsOpen){
  setFormOpen(formIsOpen)
}

function formHandler(){
  setFormOpen(true)
}
  return (
    <>

    <main className={classes.container}>
         <div className={classes.credits}>
    <h1>Made by Ghadi Elias</h1>
    <a href="https://www.instagram.com/ghadi1901/">
      
      <FaInstagram 
    size="30px" 
    color="white"
    fill='red'
    /></a>
    <a href="https://www.linkedin.com/in/ghadi-elias-411812227/">
      
      <FaLinkedin 
    size="30px" 
    color="white"
    fill='red'
    /></a>
   </div>
        <div className={classes.quote}>
        
 <TypeWriterEffect
            textStyle={{}}
            startDelay={1000}
            cursorColor="black"
            multiText={["МУЖСКИЕ","","стрижки","детские","Kresht BarberShop"]}
            typeSpeed={100}
            
          />
           <TypeWriterEffect
            textStyle={{ 
            color: 'black'}}
            startDelay={1000}
            cursorColor="black"
            multiText={["","",""," бороды","","стрижки","Kresht BarberShop"]}
            typeSpeed={100}
            
          />
           <TypeWriterEffect
            textStyle={{}}
            startDelay={1000}
            cursorColor="black"
            multiText={["","королевское","усов ","","детские","Kresht BarberShop"]}
            typeSpeed={100}
            
          />
           <TypeWriterEffect
            textStyle={{ 
            color: 'black'}}
            startDelay={1000}
            cursorColor="black"
            multiText={["СТРИЖКИ","бритьё","","","","стрижки","Kresht BarberShop"]}
            typeSpeed={100}
            
          />
  </div>
 
    </main>
    
  { !formOpen && <button onClick={formHandler}className={classes.button}>забронируйте сейчас</button>}
    {formOpen && <Booking onChangeForm={onChangeForm}/>}

 
    </>
  )
}

export default Home