import './App.css'

import Dashboard from './pages/dashboard'
import LandingPage  from './pages/landingPage'
import Login from './pages/login'
import Footer from './component/footer'
import Navbar from './component/navbar'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://silicik-api.up.railway.app" //ubah url sesuai kebutuhan


function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Periksa status autentikasi saat aplikasi dimuat
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get("/auth/status")
        if (response.data.isAuthenticated) {
          setUser(response.data.user)
        }
      } catch (error) {
        console.error("Error checking auth status:", error)
      } finally {
        setLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  // Komponen PrivateRoute untuk melindungi rute
  const PrivateRoute = ({ children }) => {
    if (loading) return <div className="loading">Loading...</div>
    return user ? children : <Navigate to="/login" />
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={
          <PrivateRoute> <Dashboard user={user} /> </PrivateRoute>
          } />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )

}

export default App
