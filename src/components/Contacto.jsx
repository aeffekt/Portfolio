import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha";
import '../styles/Contacto.css'

import { Toaster, toast } from 'sonner'


export const Contacto = () => {  
  // Variables de entorno
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID 
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY 
  const RECAPTCHA_WEB_SITE = import.meta.env.VITE_RECAPTCHA_WEB_SITE    

  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    // Verificar si el valor del captcha es nulo
    const captchaValue = form.current['g-recaptcha-response'].value;
    if (!captchaValue) {
      toast.warning("Please complete the reCAPTCHA.");
      return;
    }

    toast.info("Sending...") 
    emailjs
      .sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, form.current, {
        publicKey: `${PUBLIC_KEY}`,
      })
      .then(
        () => {
          toast.success('Message sent!')          
        },
        (error) => {          
          toast.error("Failed to send the message, mark the reCaptcha and try again!")
          console.log(error.text);
        },
      );
  };

  return (
    <div className='new-block'>      
      <h2 className='title-color'>&#9998;  Contact me</h2>
      <section className='contacto-container'>              
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />           
          <input type="submit" value="Send" />
          <ReCAPTCHA
            className='recaptcha'            
            name="captcha"
            sitekey={RECAPTCHA_WEB_SITE}            
            required
          />
        </form>
      </section>
    </div>    
  )
}

export default Contacto
