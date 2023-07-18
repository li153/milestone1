import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-md justify-content-center bg-warning navbar-dark">
            <div className="container bg-info-blue">
                <Link className="navbar-brand" to="/">EDU-FOR-FREE</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/courses">Courses</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/contact">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
  )
}

export default NavBar