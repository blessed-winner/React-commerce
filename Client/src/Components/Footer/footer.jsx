import { Link } from "react-router-dom";
import { FaInstagram,FaYoutube } from 'react-icons/fa';
import {BiLogoFacebook,BiLogoTwitter} from 'react-icons/bi'

import {MapPin} from 'lucide-react';
import {Phone} from 'lucide-react';
import { Mail } from "lucide-react";
import './footer.css'


const Footer = () => {
    
    const links = [
      { label: "All products", path: "/shop" },
      { label: "Electronics", path: "/Electronics" },
      { label: "Clothing", path: "/Clothing" },
      { label: "Home & Living", path: "/Home-Living" },
      { label: "Accessories", path: "/Accessories" },
      {label:"Featured Products", path:""}
    ];
    const linksMiddle = [
        {label:"Contact Us" , path:"/"},
        {label:"FAQs" , path:"/"},
        {label:"Shipping Policy" , path:"/"},
        {label:"Returns & Exchanges" , path:"/"},
        {label:"Privacy Policy" , path:"/"},
        {label:"Terms & Conditions" , path:"/"}
    ]
  return(
    <footer>
        <div className="footer container ">
            <div className="container-grid grid2">
            <div className="footer-logo">
                <h1>EcoShop</h1>
                <p>Your one-stop destination for sustainable and eco-friendly products that don't compromise on quality or style.</p>
                <div className="social">
                    <a href=""><BiLogoFacebook /></a>
                    <a href="" ><BiLogoTwitter/></a>
                    <a href="" ><FaInstagram/></a>
                    <a href=""><FaYoutube/></a>
                </div>
            </div>
            <div className="footer-middle">
                <h3>Shop</h3>
            <div className="shopLinks">
               {links.map((val,index) => (
                  <ul>
                    <li key={index}><Link to={val.path} className="shop-link-item">{val.label}</Link></li>
                  </ul>
               ))}
            </div>
            </div>
            <div className="footer-middle2">
                <h3>Customer Service</h3>
                <div className="service-links">
                    {linksMiddle.map((val,index)=>(
                        <ul>
                            <li key={index}><Link to={val.path} className="service-link-item">{val.label}</Link></li>
                        </ul>
                    ))}
                </div>
            </div>
            <div className="contact">
             <h3>Contact Us</h3>
               <div className="contacts">
                <span className="contact-info">
                <MapPin size={18} color="
#10B981"/><span>123 Eco Street, Green City, 10001</span>
                </span>
                 
                 <span className="contact-info">
                 <Phone size={18} color="
#10B981"/><span >(123) 456-7890</span>
                 </span>

                 <span className="contact-info">
                    <Mail size={18} color="
#10B981"/><span>
                    support@ecoshop.com
                    </span>
                 </span>
               </div>
                <div className="newsletter">
                    <h3>Subscribe to our newsletter</h3>
                    <div className="newsletter-input">
                    <input type="email"  placeholder="Your email"/>
                    <button className="subscribe-btn">Subscribe</button>
                    </div>
                 </div>
            </div>
        </div>
        <div className="copyright">
            <span>&copy;2025 Winner. All Rights Reserved</span>
        </div>
       </div>
  </footer>
  )
}
export default Footer;