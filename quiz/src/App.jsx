import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/NavBar/NavBar';

function App() {


  return (
    <Router>
      <div className="app">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formulario" element={<Forumulario />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
