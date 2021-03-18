import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export const NavBar = () => {


    return (


        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container">
                <Link
                    className="navbar-brand"
                    to="/">
                        
                    </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/"
                        >
                            Home
                        </NavLink>


                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/contacto"
                        >
                            Contact
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
