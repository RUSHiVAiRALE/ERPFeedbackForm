import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import InstituitionalFeed from './components/InstiFeed';
import GuestFeed from './components/GuestFteed';

function App() {
  let question = "How was the session?"
  let question1 = "Was the session helpfull?"
  return (
    <Routes>
      <Route path="/" element= {<InstituitionalFeed/>}/>
      <Route path="/GuestFeedback" element={<GuestFeed/>}/>
    </Routes>
  );
}

export default App;
