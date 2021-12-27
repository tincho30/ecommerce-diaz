import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Header.css'
import Logotienda from '../Logotienda/Logotienda';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

const Header = () => {
    return (
            <div className="header-main">
                <Logotienda></Logotienda>
                <Navbar></Navbar>
            </div>
    )
}

export default Header
