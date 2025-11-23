import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/verify', {
          withCredentials: true,
        });
        if (response.data.valid) {
          setUser(response.data.user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log('Not authenticated');
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/login',
        { email, password },
        { withCredentials: true }
      );
      setUser(response.data);
      setIsAuthenticated(true);
      return { success: true, user: response.data };
    } catch (error) {
      const errorMsg = error.response?.data?.error || 'Login failed';
      return { success: false, error: errorMsg };
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/signup',
        { name, email, password },
        { withCredentials: true }
      );
      setUser(response.data);
      setIsAuthenticated(true);
      return { success: true, user: response.data };
    } catch (error) {
      const errorMsg = error.response?.data?.error || 'Signup failed';
      return { success: false, error: errorMsg };
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        'http://localhost:3000/api/logout',
        {},
        { withCredentials: true }
      );
      setUser(null);
      setIsAuthenticated(false);
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      return { success: false };
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
