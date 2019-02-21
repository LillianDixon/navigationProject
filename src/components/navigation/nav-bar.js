import React, {Component} from "react";
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className = 'nav-links'>
                <NavLink exact to="/" activeClassName="nav-link-active">
                Home
                </NavLink>

                <NavLink to="/about" activeClassName="nav-link-active">
                    About
                </NavLink>
                
                <NavLink to="/contact" activeClassName="nav-link-active">
                    Contact
                </NavLink>

            </div>
        )
    }
}