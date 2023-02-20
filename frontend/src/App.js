import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import MainNavigation from './shared/components/Navigation/MainNavigation.js'

const App = () => {
  return(
    <Router>
      <MainNavigation/>
    
    <h1>IIITNR</h1></Router> 
  )
};

export default App;
