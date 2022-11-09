import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Error from './components/Error.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Logement from './pages/Logement.jsx';
import './style/index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id/*" element={<Logement />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
