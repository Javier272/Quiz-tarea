import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/mainPages/Home';
import QuizPage from './pages/mainPages/quizPage';
import ResultPage from './pages/mainPages/resultQuiz';

function App() {


  return (
    <Router>
      <div className="app">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
