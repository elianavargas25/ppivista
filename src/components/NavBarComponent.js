import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../images/logo.png'
import '../styles/NavBarStyle.css'
import '../styles/Menu.css'


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
                            <Link className="link" to="/menu">Cerrar Sesión</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <div className="nav-link">
                                    <Link to="/ingresos/new" >Gestión Ingresos</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <Link to="/egresos/new" >Gestión Egresos</Link>
                                </div>

                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <Link to="/movimientos/new" >Movimientos</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">
                                    <Link to="/profiles/new" >Usuarios</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="bar-chart-2"></span>
                                    Reports
            </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBarComponent;