import logo from './logo.svg';
import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css'; // Make sure Tailwind CSS is imported

// Sample components
function Home() {
  return <div className="text-center">Home Page</div>;
}

function About() {
  return <div className="text-center">About Page</div>;
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

