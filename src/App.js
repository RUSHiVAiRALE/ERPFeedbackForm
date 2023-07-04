import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InstitutionalFeed from './components/InstiFeed';
import GuestFeed from './components/GuestFteed';
import Success from './components/Success';
import Home from './components/Home';
import AluminiFeed from './components/AluminiFeed';
import StudentFeed from './components/StudentFeed'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/InstitutionalFeed" element={<InstitutionalFeed />} />
      <Route path="/GuestFeedback" element={<GuestFeed />} />
      <Route path="/AluminiFeed" element={<AluminiFeed />} />
      <Route path="/StudentFeed" element={<StudentFeed />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
