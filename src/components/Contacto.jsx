import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/Contacto.css'

import { Toaster, toast } from 'sonner'


export const Contacto = () => {  
  
  const form = useRef();
  function sendEmail(e) {
    toast.info("Sending...")
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY    
    
    e.preventDefault();      
    emailjs
      .sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, form.current, {
        publicKey: `${PUBLIC_KEY}`,
      })
      .then(
        () => {
          toast.success('Message sent!')          
        },
        (error) => {          
          toast.error("Failed to send the message, try again!")
          console.log(error.text);
        },
      );
  };

  return (
    <div className='new-block' id="contacto">      
      <h2 className='title-color'>&#9998;  Contact me</h2>
      <section className='contacto-container'>              
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </section>
    </div>
    
  )
}

export default Contacto
