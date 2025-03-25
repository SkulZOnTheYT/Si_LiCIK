import './App.css'
import Dashboard from './pages/dashboard'
import LandingPage from './pages/landingPage'
import Login from './pages/login'
import Footer from './component/footer'
import Navbar from './component/navbar'
import axios from 'axios'
import url from './url'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Set default axios configuration
axios.defaults.withCredentials = true;
axios.defaults.baseURL = url.apiUrl;

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get("/auth/status")
        if (response.data.isAuthenticated) {
          setUser(response.data.user)
        }
      } catch (error) {
        console.error("Error checking auth status:", error)
        setError("Failed to verify authentication status")
      } finally {
        setLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  const PrivateRoute = ({ children }) => {
    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )
    }

    if (error) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        </div>
      )
    }

    return user ? children : <Navigate to="/login" replace />
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar user={user} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/dashboard" 
              element={
                <PrivateRoute>
                  <Dashboard user={user} />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/login" 
              element={user ? <Navigate to="/dashboard" replace /> : <Login />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App