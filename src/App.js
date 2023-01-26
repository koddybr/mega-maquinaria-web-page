
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './components/Signin';

const config = [
  {
    title: 'image one',
    image: 'img1.jpg'
  },
  {
    title: 'image two',
    image: 'img2.jpg'
  }
]

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/signin" element={<SigninPage/>} exact />
        </Routes>
    </Router>
  );
}

export default App;
