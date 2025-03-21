import './App.css'

import LandingPage  from './pages/landingPage'
import Footer from './component/footer'
import Navbar from './component/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </Router>
  )

}

export default App
