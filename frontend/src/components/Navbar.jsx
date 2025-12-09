import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "react-bootstrap";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";
import { CgGym } from "react-icons/cg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const currentPath = location.pathname;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && <div className="navbar-overlay" onClick={closeMenu} />}

            <Button
                variant="outline-secondary"
                className="navbar-toggle"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </Button>

            <nav className={`navbar ${isOpen ? 'navbar-open' : ''}`}>
                <div className="navbar-brand">
                    <Link to="/" onClick={closeMenu} className="navbar-logo-link">
                        <CgGym size="3em" className="navbar-logo" />
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

