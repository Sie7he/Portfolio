import React from 'react';
import Carousel from "react-elastic-carousel";
import { port }from '../data/porta';
import { Card } from './Card';

export const Carrusel = () => {

    const breakPoints = [
        { width: 1200, itemsToShow: 1 },
        { width: 890, itemsToShow: 2 },
        { width: 700, itemsToShow: 3 },
       
        
      ];
    return (
        <div data-aos="fade-up" className="container">
      <h1 style={{ textAlign: "center" }}>Portafolio</h1>
      <h2 style={{ textAlign: "center" }}>Proyecto de librería</h2>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
            {
                port.map( img => (
                    <div key={img.id}>
                    <Card cardImage={img.image} />
                    </div>
                ))
            }
        
         
       
        </Carousel>
      </div>
    </div>
    )
}
