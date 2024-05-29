
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import HeroSection from "./Componenets/HeroSection";
import Header from '/src/Header/Header'
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
     
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
    </Router>
     
    </>
  );
}

export default App;
