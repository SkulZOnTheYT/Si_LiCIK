import "./App.css";
import Dashboard from "./pages/dashboard/index";
import Privacy from "./pages/privacy";
import Login from "./pages/login";
import LandingPage from "./pages/landingPage";
import NotFound from "./pages/notFound";
import Profile from "./pages/profile";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import NavbarDashboard from "./component/navbardash";
import axios from "axios";
import url from "./utils/url";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Analisis from "./pages/dashboard/analisis";


// Set default axios configuration
axios.defaults.withCredentials = true;
axios.defaults.baseURL = url.apiUrl;

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const Location = useLocation();

  const checkAuthStatus = async () => {
    try {
      console.log("Cookies sent to server:", document.cookie);
      const response = await axios.get(`/auth/status?ts=${Date.now()}`, {
        withCredentials: true,
      });
      console.log("Auth status response:", response.data);
      if (response.data.isAuthenticated) {
        setUser(response.data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
      setError("Failed to verify authentication status");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [Location.pathname]);

  const PrivateRoute = ({ children }) => {
    if (loading) {
      return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>;
    }
    if (error) {
      return <div className="min-h-screen flex items-center justify-center"><div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div></div>;
    }
    return user ? children : <Navigate to="/login" replace />;
  };

  const getNavbar = () => {
    if (location.pathname.startsWith('/dashboard')) {
      return <NavbarDashboard user={user} />;
    }
    return <Navbar user={user} />;
  };

  return (
    <main className="flex flex-col min-h-screen">
      {getNavbar()}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/profile" replace /> : <Login />}
        />
        <Route 
          path="/profil" 
          element={
            <PrivateRoute>
              <Profile user={user} />
            </PrivateRoute>
          } 
        />

          {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/analisis" element={<Analisis />} />

          {/* Routes Lainnya */}
        <Route path='/privacy' element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;