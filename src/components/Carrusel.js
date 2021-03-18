import React from 'react';
import Carousel from "react-elastic-carousel";
import { port }from '../data/porta';
import { Card } from './Card';

export const Carrusel = () => {

    const breakPoints = [
        { width: 1200, itemsToShow: 1 },
       
        
      ];
    return (
        <div data-aos="fade-up" className="container">
      <h1 style={{ textAlign: "center" }}>Portafolio</h1>
      <h2 style={{ textAlign: "center" }}>Proyecto de librería</h2>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
            {
                port.map( img => (
                    <Card cardImage={img.image} />
                ))
            }
        
         
       
        </Carousel>
      </div>
    </div>
    )
}
