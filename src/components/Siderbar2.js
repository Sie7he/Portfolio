import React from 'react';
import { NavLink } from 'react-router-dom';

export const SideBar2 = () => {
    return (

        <div className="sidebar2">

           
           <div className="wrapper">

               
                    
                            <NavLink
                                exact
                                to='/es'
                                > 
                                ES
                                </NavLink>
                       
                                <NavLink
                                exact
                                to='/'
                                > 
                                ENG
                                </NavLink>
                            </div>
           
        </div>
    )
}
