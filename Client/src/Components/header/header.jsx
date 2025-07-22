import {Search} from 'lucide-react';
import {ShoppingCart} from 'lucide-react';
import {Link} from 'react-router-dom';
import './header.css';
import React, { useState, useEffect } from 'react';
import {Menu} from 'lucide-react';
import {User} from 'lucide-react';
import {X} from 'lucide-react';


const Header = () => {
    

   const [menuOpen, setMenuOpen] = useState(false); 

   
    const handleActiveToggle = () => {
        setMenuOpen(prev => !prev);
    }
    const handleLinkClick = () => {
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
                    <li className="none-lc" onClick={handleLinkClick}><User size={20} className='icon'/><Link to ="/Login">Login / Register</Link></li>
                     <li className="none-lc" onClick={handleLinkClick}><Search size={20} className="icon"/><Link to = "/Search">Search</Link></li>
                </ul>
            </div>
            <div className="right">
                <div className="actions">
                <span><Search size={20} className="icon"/></span>
                <span><Link to = "/login" className="login-text">Login</Link></span>
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