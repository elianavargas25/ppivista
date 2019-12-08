import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo.png'
import '../styles/Menu.css'

function Menu() {
    return (
        <div classNameName="Navbar">
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
                                <Link to="/egresos/new" >Movimientos</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <li className="nav-item">
                                <div className="nav-link">
                                    <Link to="/profiles/new" >Usuarios</Link>
                                </div>
                            </li>
                        </li>
                        <li className="nav-item">
                            <li className="nav-item">
                                <div className="nav-link">
                                    <Link to="/cambiarcontrasena/new" >Cambiar Contraseña</Link>
                                </div>
                            </li>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="layers"></span>
                                Integrations
            </a>
                        </li>
                    </ul>

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Saved reports</span>
                        <a className="d-flex align-items-center text-muted" href="#">
                            <span data-feather="plus-circle"></span>
                        </a>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Current month
            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Last quarter
            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Social engagement
            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Year-end sale
            </a>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}

export default Menu;