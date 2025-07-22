import './auth.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';
import{useNavigate} from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
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
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match.");
      return;
    }
    if(!formData.agreed){
      setError("Please agree to the terms and conditions")
      return
    }

    try {
      const res = await axios.post(
        'http://localhost:3000/api/signup',
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );
      setError("")
      navigate('/');
      
    } catch (e) {
      setError(e.response.data.error)
      console.error(e);
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

          <button type="submit">Sign Up</button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </div>
    
  );
};

export default Signup;
