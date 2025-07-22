import './hero.css';
import { ShoppingBag } from 'lucide-react';
import {ChevronRight} from 'lucide-react';

const Hero = () => {
    return(
        <>
        <section className="hero padding">
            <div className="container">
            <div className="hero-content grid">
            <div className="left row">
                   <div className="left-text">
                      <span className="left-text-span">Summer Collection 2025</span>
                      <h1>
                      Discover <span>Sustainable</span> Fashion & Lifestyle
                      </h1>
                      <p>Shop our curated collection of eco-friendly products that don't compromise on style or quality. Join us in creating a more sustainable future.</p>
                      <div className="btn">
                          <a href="" className="primary-btn"><ShoppingBag className="shop-btn" size={20}/>Shop Now</a>
                          <a href="" className="secondary-btn">Browse Categories<ChevronRight className="shop-btn" size={20}/></a> 
                      </div>
                      <div className="text">
                        <span>
                           <h2>1000+</h2>
                           <p>products</p>
                        </span>
                        <div></div>
                      
                        <span className="target">
                           <h2>24/7</h2>
                           <p>Customer Support</p>
                        </span>
                        <div></div>
                        
                        <span className="target">
                           <h2>100%</h2>
                           <p>Secure Checkout</p>
                        </span>
                        
                        
                        </div>
                   </div>
             </div>
             <div className="right-div row">
                 <div className="img">
                   <img src="/images/home.webp" alt="Hero image" />
                    <div className="add-on">
                      <span>New Arrivals</span>
                      <p>Up to 30% off</p>
                    </div>
                 </div>
             </div>
            </div>
            </div>
           </section>
      </>
    )}
export default Hero;