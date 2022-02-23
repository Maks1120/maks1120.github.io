import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';

import {DriverMapPage} from './pages/DriverMapPage/DriverMapPage';
import AdminMapPage from './pages/AdminMapPage/AdminMapPage';
import Admin from './pages/Admin/Admin';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Authorization from './pages/Authorization/Authorization';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/drivermap">Driver Map</Link></li>
          <li><Link to="/adminmap">Admin Map</Link></li>
          <li><Link to="/authorization">Authorization</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </header>
      <Routes>
        <Route path='/' element={ <HomePage/> }/> 
        <Route path='/drivermap' element={ <DriverMapPage/> }/>
        <Route path='/adminmap' element={ <AdminMapPage/> }/>
        <Route path='/admin' element={ <Admin/> }/>
        <Route path='/authorization' element={ <Authorization/> }/>
        <Route path='*' element={ <NotFoundPage/> }/>
      </Routes>
    </div>
  );
};

export default App;
