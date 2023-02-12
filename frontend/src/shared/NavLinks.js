import React, {useRef} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

import './NavLinks.css'

const NavLinks = props => {
    const navRef = useRef();

    const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return (<header>
        <h3>IIITNR</h3>
        <nav ref={navRef} text-align = 'center'>
            <a href="/">INSTITUTE</a> 
            <a href="/">ACADEMICS</a> 
            <a href="/">FACULTY</a>
            <a href="/">RESEARCH</a>
            <a href="/">STUDENTS</a>
            <a href="/">PLACEMENT</a>
            <a href="/">QUICK LINKS</a>
            <a href="/">ADMISSIONS</a>
            <button
                className="nav-btn nav-close-btn"
                onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
        </button>
    </header>)
};

export default NavLinks;