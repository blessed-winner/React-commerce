import './auth.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
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
 
  const handleSubmit = async(e) => {
    e.preventDefault();
     if(!formData.email || !formData.password){
    setError('Please fill all the fields');
    return;
  }
    try{
      const res= await axios.post('http://localhost:3000/api/login',{
      email:formData.email,
      password:formData.password
    },{withCredentials:true})
    setError("")
    navigate('/');
    }
   catch(e){
   
    let errorMsg = e.response.data.error;
     setError(errorMsg);
    console.error(errorMsg);
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
            <button>Log In</button>
            <span>Don't have an account ? <Link to = "/signup">Register</Link></span>
        </form>
        
    </div>
    </div>
   
  )
  
}
export default Login;