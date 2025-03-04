import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Body from './Body';
import Header from './Header';
import Responsivemenu from './Responsivemenu';
import Details from './Details';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Responsivemenu />
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/details/:categoryId" element={<Details />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
