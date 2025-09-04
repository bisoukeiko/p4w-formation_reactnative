import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Docs</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/tutorials">Tutorials</Link>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/comunity">Comunity</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Menu;