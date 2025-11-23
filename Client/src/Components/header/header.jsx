import {Search} from 'lucide-react';
import {ShoppingCart} from 'lucide-react';
import {Link, useNavigate} from 'react-router-dom';
import './header.css';
import React, { useState, useEffect } from 'react';
import {Menu} from 'lucide-react';
import {User} from 'lucide-react';
import {X} from 'lucide-react';
import {LogOut} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';


const Header = () => {
    const { isAuthenticated, user, logout, loading } = useAuth();
    const navigate = useNavigate();

   const [menuOpen, setMenuOpen] = useState(false); 

   
    const handleActiveToggle = () => {
        setMenuOpen(prev => !prev);
    }
    const handleLinkClick = () => {
        setMenuOpen(false);
    }

    const handleLogout = async () => {
        await logout();
        navigate('/');
        setMenuOpen(false);
    }

    const[isScrolled,setIsScrolled] = useState(false)
    useEffect(()=>{
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        };
        window.addEventListener('scroll',handleScroll);
        return()=>{
            window.removeEventListener('scroll',handleScroll);
        }
           },[])

   

    return(
        <>
          <header className={isScrolled?"mobile-header":"normal"}>
            <nav className="flexSB">
            <div className="logo">
                <h1>EcoShop</h1>
            </div>
          
            <div className={menuOpen ? "active" : "links"}>
                <ul>
                    <li><Link to = "/" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link to = "/shop" onClick={handleLinkClick}>Shop</Link></li>
                    <li><Link to = "/categories" onClick={handleLinkClick}>Categories</Link></li>
                    <li><Link to = "/about" onClick={handleLinkClick}>About</Link></li>
                    {!loading && !isAuthenticated && (
                        <li className="none-lc" onClick={handleLinkClick}><User size={20} className='icon'/><Link to ="/Login">Login / Register</Link></li>
                    )}
                    {!loading && isAuthenticated && (
                        <li className="none-lc user-menu">
                            <User size={20} className='icon'/>
                            <span className="user-name">{user?.name}</span>
                            <button className="logout-btn-mobile" onClick={handleLogout}>Logout</button>
                        </li>
                    )}
                     <li className="none-lc" onClick={handleLinkClick}><Search size={20} className="icon"/><Link to = "/Search">Search</Link></li>
                </ul>
            </div>
            <div className="right">
                <div className="actions">
                <span><Search size={20} className="icon"/></span>
                {!loading && !isAuthenticated && (
                    <span><Link to = "/login" className="login-text">Login</Link></span>
                )}
                {!loading && isAuthenticated && (
                    <div className="user-info">
                        <span className="user-name-desktop">{user?.name}</span>
                        <button className="logout-btn" onClick={handleLogout}>
                            <LogOut size={18} className="icon"/>
                        </button>
                    </div>
                )}
                </div>
                <div className="scmenu">
                <span><ShoppingCart size={20} className="icon"/></span>
                <span className="menu" onClick={handleActiveToggle} style={{cursor:"pointer"}}>
                  {menuOpen ? <X className="icon"/> : <Menu className="icon"/>}
                  </span>
                </div>
              </div>
          
            </nav>
           </header>
        </>
    )
}
export default Header;