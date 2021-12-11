import React from 'react'
import './Navbar.css'
import Cartwdidget from '../CartWidget/Index';

const Navbar = ({titulo}) => {
    return (
        <div>
            <nav className="navbar N/A transparent z-depth-0">
                <ul>
                    <li>{titulo}</li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Productos</a></li>
                    <li><a href="/">Social</a></li>
                    <li><a href="/">Contact</a></li>
                    <Cartwdidget></Cartwdidget>
                </ul>
                
            </nav>
        </div>
    )
}

export default Navbar
