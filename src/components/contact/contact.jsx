import React, { useState } from 'react'
import './contact.scss'

export default function Contact() {
  const [message,setMessage] = useState(false);
  const submithandler = (e)=>{
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assest/shake.svg" alt="shake" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={submithandler}>
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message..'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, i'll reply ASAP :) </span>}
        </form>
      </div>
    </div>
  )
}
