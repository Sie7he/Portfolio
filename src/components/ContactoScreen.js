import React from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/contact.css';
import { useForm, ValidationError } from '@formspree/react';



export const ContactForm = () => {
  
   const [state, handleSubmit] = useForm("mnqoekdg");
   if (state.succeeded) {
      return (
         <Redirect to ="/" />
      );
   }
   return (
      <section className="get-in-touch">
         <h1 className="title">Contáctame</h1>  
         <form className="contact-form row" onSubmit={handleSubmit}>
            <div className="form-field col-lg-6">
               <input id="name" name="name" className="input-text js-input" type="text" placeholder="Nombre" required />
               <ValidationError
                  prefix="name"
                  field="name"
                  errors={state.errors}
               />
            </div>
            <div className="form-field col-lg-6 ">
               <input id="email" name="email" className="input-text js-input" type="email" placeholder="Email" required />
               <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
               />
            </div>
            <div className="form-field col-lg-12">
               <input id="message" name="message" className="input-text js-input" type="text" placeholder="Mensaje" required />
               <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
               />
            </div>
            <div className="form-field col-lg-12">
               <button type="submit" className="submit-btn" disabled={state.submitting}> Enviar </button>
            </div>




         </form>
      </section>
   );
}

