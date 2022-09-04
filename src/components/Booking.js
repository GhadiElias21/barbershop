import React, { useState } from 'react'
import TimePick from '../components/TimePick'
import classes from './booking.module.css'
function Contact(props) {
 const [enteredName,setEnteredName]=useState('')
 const [enteredNumber,setEnteredNumber]=useState('')
 const [enteredDate,setEnteredDate]=useState('')


 async function sendData(Name,Number,Date){
  const response =await fetch('https://hadzi-69e77-default-rtdb.europe-west1.firebasedatabase.app/apointment.json',{
    method: 'POST',
    body: JSON.stringify({
      Name,
      Number,
      Date
    }),
    headers:{
      'Content-Type':'application/json'
    }
  })

}

const enteredNameIsValid=  enteredName.trim().length >3

 const enteredFormIsValid=enteredNameIsValid && enteredNumber.trim().length ===9;
 let formIsValid=false

 if( enteredFormIsValid){
  formIsValid=true
 }
function saveDateHandler(enteredDate){
setEnteredDate(enteredDate)

}

 const nameInputChangeHandler=event=>{
  setEnteredName(event.target.value)
 }

 const numberInputChangeHandler=event=>{
  setEnteredNumber(event.target.value)
 }
function formCloser(){
  props.onChangeForm(false)
}
 const formSubmitHandler=event=>{
  
  event.preventDefault()

  if(!enteredFormIsValid){
    return
  }


   setEnteredName('')
   setEnteredNumber('')
   sendData(enteredName,enteredNumber,enteredDate )
   props.onChangeForm(false)
  
 
}

  return (<div className={classes.mani}>
  <button className={classes.x} onClick={formCloser}>X</button>
    <form onSubmit={formSubmitHandler}className={classes.form}>
    <div className={classes.PersInfo}>
      <div>
      <input
      className={classes.input1}
        type='text'
        autoComplete='off'
        id='name'
        onChange={nameInputChangeHandler}
        value={enteredName}
        placeholder="имя-фамилия"
        

        ></input>
       
        </div>
    </div>
    <div className={classes.PersInfo}>
      <div>
      <input
      className={classes.input2}
        type='number'
        id='number'
        value={enteredNumber}
        onChange={numberInputChangeHandler}
       placeholder="номер телефона без +375"
       ></input>
        
        </div>
    </div>
    <div className={classes.main}><TimePick onAddDate={saveDateHandler}/></div> 
    <button className={classes.button}disabled={!formIsValid}> submit</button>
    </form>
    </div>
  )
}

export default Contact