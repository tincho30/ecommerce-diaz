import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Productos</a></li>
                    <li><a href="/">Social</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
