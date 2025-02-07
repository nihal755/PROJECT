import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Men from './Men';
import Women from './Women';


function App() {
  return (
    <Router>
      <nav className='bg-gray-800 p-4'>
        <ul className='flex justify-centre space-x-6'>
          <li>
            <Link to={"/"} className='text-white font-bold hover:text-gray-300'> 
            Home 
            </Link>
          </li>

          <li>
            <Link to="/men" className="text-white font-bold hover:text-gray-300">Men</Link>
          </li>

          <li>
            <Link to="/women" className="text-white font-bold hover:text-gray-300">Women</Link>
          </li>
 
        </ul>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />


      </Routes>
    </Router> 
    
  );
}

export default App;

