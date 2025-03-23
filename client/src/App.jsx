import './App.css'

import LandingPage  from './pages/landingPage'
import Login from './pages/login'
import Footer from './component/footer'
import Navbar from './component/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )

}

export default App
