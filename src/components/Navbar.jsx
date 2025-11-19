import { useState } from "react";
import { Link, useLocation } from "react-router";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";
import { CgGym } from "react-icons/cg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    
    // Get the current pathname (works with HashRouter)
    // HashRouter stores the path in location.pathname, not location.hash
    const currentPath = location.pathname;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Mobile Menu Overlay */}
            {isOpen && <div className="navbar-overlay" onClick={closeMenu} />}
            
            {/* Hamburger Button (Mobile Only) */}
            <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <nav className={`navbar ${isOpen ? 'navbar-open' : ''}`}>
                <div className="navbar-brand">
                    <Link to="/" onClick={closeMenu} className="navbar-logo-link">
                        <CgGym size="2.5em" className="navbar-logo" />
                        <span className="navbar-brand-text">Training</span>
                    </Link>
                </div>
                <ul className="navbar-nav">
                    <li>
                        <Link 
                            to="/" 
                            onClick={closeMenu} 
                            className={currentPath === '/' || currentPath === '' ? 'active' : ''}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/workouts" 
                            onClick={closeMenu}
                            className={currentPath === '/workouts' ? 'active' : ''}
                        >
                            Workouts
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/profile" 
                            onClick={closeMenu}
                            className={currentPath === '/profile' ? 'active' : ''}
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            onClick={closeMenu}
                            className={currentPath === '/about' ? 'active' : ''}
                        >
                            About
                        </Link>
                    </li>
                </ul>
                <div className="navbar-footer">
                    <ThemeToggle />
                </div>
            </nav>
        </>
    );
}

export default Navbar;

