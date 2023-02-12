import React from 'react'

import NavLinks from './NavLinks';
import img1 from './logo.jpg'
import './MainNavigation.css'


const MainNavigation = props => {
    return(
    <React.Fragment>
        <div  className="Image">
            <img src={img1} alt=""></img>
        </div>
        <nav class ="navbar">
        <NavLinks></NavLinks>
        </nav>
    </React.Fragment>
    
    );
};

export default MainNavigation;
