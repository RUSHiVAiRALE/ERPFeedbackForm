
import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import InstitutionalFeed from './components/InstiFeed';
import GuestFeed from './components/GuestFteed';

function App() {

  return (
    <Routes>
      <Route path="/" element= {<InstitutionalFeed/>}/>
      <Route path="/GuestFeedback" element={<GuestFeed/>}/>
    </Routes>
  );
}

export default App;
