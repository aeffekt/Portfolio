import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/Contacto.css'


export const Contacto = () => {  
  
  const form = useRef();
  function sendEmail(e) {
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
          window.alert('Message sent!');
        },
        (error) => {
          window.alert('Failed to send the message!');
          console.log(error.text);
        },
      );
  };

  return (
    <div className='new-block' id="contacto">
      <h2 className='title-color'>&#9998;  Contact</h2>
      <section className='contacto-container'>              
        <div className='text-container'>
          <div className='line'>
            <h2 className='distint-color'>✉</h2><span>arnaizagustin@gmail.com</span>                
          </div>        
          
          <div className="email-form">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>      
      </section>
    </div>
    
  )
}

export default Contacto
