import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import MainContent from './pages/maincontent';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './features/login/pages/LoginPage';

function App() {
  return (
    <>
      <Navbar />
      {/* Gunakan Routes untuk mendukung routing */}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Tambahkan rute lainnya jika diperlukan */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
