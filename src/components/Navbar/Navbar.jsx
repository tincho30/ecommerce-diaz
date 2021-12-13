import React from 'react'
import Cartwdidget from '../CartWidget/Index';
import {styles} from './styles'
import Link from '../Link';

const Navbar = () => {
    return (
        <div>
            <nav className="transparent z-depth-0" style={styles.nav}>
                <ul>
                    <Link></Link>
                    <Cartwdidget></Cartwdidget>
                </ul>
                
            </nav>
        </div>
    )
}

export default Navbar
