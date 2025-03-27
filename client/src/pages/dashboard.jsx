import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import url from '../url';

function Dashboard({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.location.href = `${url.apiUrl}/auth/logout`;
  };

  useEffect(() => {
    console.log("API URL digunakan:", url.apiUrl);
    const verifyAuth = async () => {
      try {
        const response = await axios.get(`${url.apiUrl}/api/user`, {
          withCredentials: true,
        });
        console.log("Response from /api/user:", response.data);
        if (!response.data.success) {
          console.log("Not authenticated, redirecting to /login");
          navigate('/login', { replace: true });
        }
      } catch (error) {
        console.error('Authentication verification failed:', error.response?.data || error.message);
        navigate('/login', { replace: true });
      }
    };
    verifyAuth();
  }, [navigate]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">
              Member since: {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to Your Dashboard</h2>
          <p className="text-gray-700">
            This is your personal dashboard. You're successfully authenticated and can access all protected features.
          </p>
        </div>
      </div>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
}

export default Dashboard;