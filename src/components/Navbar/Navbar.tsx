import { FC, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../image/Logo.svg';

export const Navbar: FC = () => {
    const navRef = useRef<HTMLElement>(null)

    const showNavbar = () => {
        navRef.current?.classList.toggle('navbar__nav--responsive');
    }

    return (
        <header className="navbar">
            <NavLink className="navbar__logo" to={'/'}>
                <img src={logo} alt="wine" />
            </NavLink>
            
            <nav
                className="navbar__nav"
                ref={navRef}
            >

                <div className="navbar__nav-section">
                    <NavLink className="navbar__link" to={'/catalog'} onClick={showNavbar}>Catalog</NavLink>
                    <NavLink className="navbar__link" to={'/home'} onClick={showNavbar}>About</NavLink>
                </div>

                <div className="navbar__nav-section">
                    <NavLink className="navbar__link" to={'/signin'} onClick={showNavbar}>
                        <button className="navbar__button--styled">
                            Sign In
                        </button>
                    </NavLink>

                    <NavLink className="navbar__link" to={'/signup'} onClick={showNavbar}>
                        <button className="navbar__button--styled">
                            Sign Up
                        </button>
                    </NavLink>
                </div>
                <button
                    className="navbar__button navbar__button--close"
                    onClick={showNavbar}
                >
                    <FaTimes />
                </button>
            </nav>

            <button
                className="navbar__button"
                onClick={showNavbar}
            >
                <FaBars />
            </button>
        </header>
    )
}