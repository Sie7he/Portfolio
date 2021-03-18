import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomeScreen } from '../components/HomeScreen';
import { ContactForm } from '../components/ContactoScreen';
import { NavBar } from '../components/ui/NavBar';
import { SideBar } from '../components/SideBar';
import { SideBar2 } from '../components/Siderbar2';

export const DashboardRoutes = () => {
    return (
        
        
        <>
        <NavBar />
        <SideBar />
        
               <Switch>

                   <Route exact path="/contacto" component={ ContactForm } />
                   <Route exact path="/" component={ HomeScreen } />
                   <Redirect to ="/" />
               </Switch>
         
        </>
       
    )
}
