import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Header.css'
import Logotienda from '../Logotienda/Logotienda';

const Header = () => {
    return (
        <div className="header-main">
            <Logotienda></Logotienda>
            <Navbar titulo="Mi sitio"></Navbar>
        </div>
    )
}

export default Header
