import React from 'react'

import NavLinks from './NavLinks';
import img1 from './logo.jpg'
import img2 from './logo2.jpg'
import './MainNavigation.css'


const MainNavigation = props => {
    return(
    <React.Fragment>
    <header>
        <div  className="Image">
            <img src={img1} alt=""></img>
        </div>
        <div className="nav-area">
        <a href = "/#" className = "logo" >
        IIITNR </a>
        <NavLinks />
        </div>
        <div  className="Image">
            <img src={img2} alt=""></img>
        </div>
    </header>
    </React.Fragment>
    
    );
};

export default MainNavigation;
