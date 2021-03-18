import React from 'react';
import { Skills } from './Skills';
import "aos/dist/aos.css";
import AOS from 'aos';
import { Home } from './Home';
import { Carrusel } from './Carrusel';


export const HomeScreen = () => {

    AOS.init({
        // initialise with other settings
        duration : 2000
      });
    return (
        <>
            
            <section>
            
            <Home />

            </section>
            

            <section id="skills">
            
            <Skills />
            
            </section>

            <section id="portafolio">
            
            
            <Carrusel />
           
             
            </section>
            
        </>

           

           
            
            
            
     
    )
}
