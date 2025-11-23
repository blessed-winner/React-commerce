import './auth.css';
import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData,setFormData] = useState({
    email:'',
    password:''  
  })
  const handleChange = (e) => {
    setFormData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  
 
   
  const [error,setError] = useState("");
  const [loading, setLoading] = useState(false);
 
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
     if(!formData.email || !formData.password){
    setError('Please fill all the fields');
    setLoading(false);
    return;
  }
    try{
      const result = await login(formData.email, formData.password);
      if(result.success) {
        setError("");
        navigate('/');
      } else {
        setError(result.error);
      }
    }
   catch(e){
    setError('An error occurred. Please try again.');
    console.error(e);
   }
   finally {
    setLoading(false);
   }
  }
 

  return(
    <div className="parent">
    <div className="auth-section">
      <h1>Welcome Back</h1>
        
        <form onSubmit={handleSubmit} noValidate>
            <h2>Log In</h2>
            
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder = "User@example.com" name="email" value={formData.email} onChange={handleChange}/>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder = "password" name="password" value={formData.password} onChange={handleChange}/>
            {error && <div className="error">{error}</div>}
            <button disabled={loading}>{loading ? 'Logging in...' : 'Log In'}</button>
            <span>Don't have an account ? <Link to = "/signup">Register</Link></span>
        </form>
        
    </div>
    </div>
   
  )
  
}
export default Login;