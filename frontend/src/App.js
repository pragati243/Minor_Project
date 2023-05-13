import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

import './App.css';
import MainNavigation from './shared/components/Navigation/MainNavigation.js';
import ScrollToTop from './shared/components/Navigation/ScrollToTop';
import DummyContent from './shared/components/DummyContent/dummy';
import WeighingMachine from './shared/components/CSE/cse';
import Table from './shared/components/DSAI/dsai';

const App = () => {
  let routes;
  routes=(
    <Routes>
      <Route path="/home"  element={<DummyContent/>} ></Route>
      <Route path="/cse-game" element={<WeighingMachine/>}></Route>
      <Route path="/dsai-game" element={<Table/>}></Route>
      <Route path="/ece-game"></Route>
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  );
  return(
    <Router>
      <MainNavigation/>
      <main>
          {routes}
      </main>
    <ScrollToTop/>
  </Router>)
};

export default App;
