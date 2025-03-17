import './App.css'

import LandingPage  from './pages/landingPage'
import Navbar from './component/navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <footer className="w-full border-t bg-white py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2 font-bold">
            <img src="/src/assets/logo.png" alt="SI LICIK Logo" width={24} height={24} className="rounded-md" />
            <span>SI LICIK</span>
          </div>
          <p className="text-center text-sm text-gray-600 md:text-left">
            &copy; {new Date().getFullYear()} SI LICIK. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-4">
            <Link to="/about" className="text-sm text-gray-600 hover:text-black">
              Tentang
            </Link>
            <Link to="/features" className="text-sm text-gray-600 hover:text-black">
              Fitur
            </Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-black">
              Kontak
            </Link>
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-black">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </footer>
    </Router>
  )

}

export default App
