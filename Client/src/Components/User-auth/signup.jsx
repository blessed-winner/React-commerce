import './auth.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreed:false
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheck = (e) => {
    setFormData((prev)=>({
      ...prev,
      agreed:e.target.checked
    }))
  }
  const[error,setError] = useState("")
  const [loading, setLoading] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match.");
      setLoading(false);
      return;
    }
    if(!formData.agreed){
      setError("Please agree to the terms and conditions")
      setLoading(false);
      return
    }

    try {
      const result = await signup(formData.name, formData.email, formData.password);
      if(result.success) {
        setError("")
        navigate('/');
      } else {
        setError(result.error);
      }
    } catch (e) {
      setError('An error occurred. Please try again.');
      console.error(e);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="parent">
       <div className="auth-section">
      <h1>Join Our Eco Fashion Club</h1>
        <form autoComplete="off" onSubmit={handleSubmit} noValidate>
          <h2>Sign Up</h2>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Username"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="User@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <div className="check-box">
            <input type="checkbox" checked={formData.agreed} onChange={handleCheck} /> 
            <p>I agree to Eco-Shop's terms and conditions.</p>
          </div>
          {error && <div className="error">{error}</div>}

          <button type="submit" disabled={loading}>{loading ? 'Creating account...' : 'Sign Up'}</button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </div>
    
  );
};

export default Signup;
