import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../images/logo.png'
import '../styles/NavBarStyle.css'

class NavBarComponent extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    
                <Link className="link" to="/">
                    <img className="Navbar__brand-logo" src={logo} alt="Logo" /></Link>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <Link className="link" to="/menu">Ingresar</Link>
                            
                        </li>
                    </ul>
                </nav>

                {/* <div className="container-fluid">
                    <Link className="NavBar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                        <span className="Navbar__brand-text" >Poli Asamblea</span>
                    </Link>
                </div> */}
            </div>
        )
    }
}

export default NavBarComponent;