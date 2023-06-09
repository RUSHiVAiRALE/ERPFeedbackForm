
import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import InstitutionalFeed from './components/InstiFeed';
import GuestFeed from './components/GuestFteed';
import Success from './components/Success';

function App() {

  return (
    <Routes>
      <Route path="/" element= {<InstitutionalFeed/>}/>
      <Route path="/GuestFeedback" element={<GuestFeed/>}/>
      <Route path="/success" element={<Success/>}/>
    </Routes>
  );
}

export default App;
