import React from 'react'

import NavLinks from './NavLinks';
import img1 from './logo.jpg'
import img2 from './logo2.jpg'
import './MainNavigation.css'


const MainNavigation = props => {
    return(
    <React.Fragment>
    <header>
        <div style={{
            backgroundColor: 'grey',
            height: '26px',
            width: '100%',
        }}>
            <h1>This is a dummy website. To go to the real website click this link. <u><a href="https://iiitnr.ac.in">IIITNR website</a></u> </h1>
        </div>
        <div  className="Image-nav">
            <img src={img1} alt=""></img>
        </div>
        <div className="nav-area">
        <a href = "/#" className = "logo-nav" >
        IIITNR </a>
        <NavLinks />
        </div>
        <div  className="Image-nav">
            <img src={img2} alt=""></img>
        </div>
    </header>
    </React.Fragment>
    
    );
};

export default MainNavigation;
