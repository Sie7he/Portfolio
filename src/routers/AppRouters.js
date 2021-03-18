import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    return (
        <Router>
      
            <Route path="/" component={ DashboardRoutes }  />
       
      </Router>
    )
}
