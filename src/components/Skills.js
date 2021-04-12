import React from 'react'
import { skills } from '../data/card';

export const Skills = () => {
    return (
      

            <div className="container">
           <div data-aos="fade-up"  className="row">
               <div className="col-md-4 col-sm-12">
                   <div className=" card">
                        <div className="card-body p-4">
                            <h1>Skills</h1>

                        {
                            skills.map( skill => (
                            <div key={skill.id}>  
                            <h5>{skill.skill}</h5>  
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: skill.percentage+'%'}}></div>
                            </div>
                            </div>
                            ))
                        }
                            
                        </div>
                   </div>
               </div>
               <div className="col-md-8 col-sm-12 p-4">
               <h1 className="pl-4 ml-3">Sobre mi</h1>
               <div className="">
                 <ul>
                     <li>Soy programador titulado del intituto profesional AIEP</li>
                     <li>Actualmente estoy estudiando Analisis de Sistemas en el mismo instituto</li>
                     <li>Me gusta desarrollar, tanto en Frontend como en Backend</li>
                 </ul>
                </div>
               </div>
           </div>
           </div>

           
    )
}
