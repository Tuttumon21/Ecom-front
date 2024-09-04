import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Base from './pages/Base';
import UserModal from './components/UserModal';

function App() {
  return (
    // <Home/>
    <Routes>
      <Route path='/' element={<Base />} >
        <Route path='/userlog' element={<UserModal />} />
      </Route>
    </Routes>
  );
}

export default App;
