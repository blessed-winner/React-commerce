import {Mail} from 'lucide-react';
const Hnewsletter = () => {
   return(
  <section className="hnewsletter">
      <div className="hnews-container">
        <div className="icon-container">
           <span className="news-icon">
            <Mail size={28}/>
           </span>
        </div>
         <div className="news-head">
            <h1>Subscribe to Our Newsletter</h1>
            <span>Stay updated with our latest products, exclusive offers, and sustainability tips.</span>
         </div>
        <div className="hnews-input">
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
        </div>
        
         <p>We respect your privacy and will never share your email with third parties.</p>
      </div>
  </section>
   )
}
export default Hnewsletter;