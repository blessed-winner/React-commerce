
import {products} from '../../../dummydata';
import { ShoppingCart } from 'lucide-react';
import {Heart,Star} from 'lucide-react';
import {Link} from 'react-router-dom';
import { ChevronRight } from 'lucide-react';



const Hproducts = () => {

    return(
        <section className="hproducts">
            <div className="heading">
                <h1>Featured Products</h1>
                <span><Link to="/shop"className="hproduct-link">View all <ChevronRight size={16} className="chevron"/></Link></span>
            </div>
            <div className="shop-cards grid2">
             {products.slice(0, 4).map((val)=>(
              <div className="item ">
                
                  <div className="img">
                  <div className="featured">
                        <div className={val.new ? 'new-span' : 'no-styles'}>{val.new}</div>
                        <div className={val.feature ? 'feature-span' : 'no-styles'}>{val.feature}</div>
                 </div>
                    <img src={val.cover} alt="" />
                     <div className="img-icons">
                     <span className="img-span"><ShoppingCart size={20}/></span>
                        <span className="img-span2"><Heart size={20}/></span>
                     
                     </div>
                  </div>
                  <div className="shop-card-text">
                      <h3 className="name">{val.name}</h3>
                      <div className="rate">
                      <span><Star size={18} style={{ transform: 'rotateX(30deg) rotateY(20deg)' ,transformStyle: 'preserve-3d', color:'gold', fill:'gold' }}/></span>
                      <span><Star size={18} style={{ transform: 'rotateX(30deg) rotateY(20deg)' ,transformStyle: 'preserve-3d', color:'gold', fill:'gold' }}/></span>
                      <span><Star size={18} style={{ transform: 'rotateX(30deg) rotateY(20deg)' ,transformStyle: 'preserve-3d', color:'gold', fill:'gold' }}/></span>
                      <span><Star size={18} style={{ transform: 'rotateX(30deg) rotateY(20deg)' ,transformStyle: 'preserve-3d', color:'gold', fill:'gold' }}/></span>
                      <span><Star size={18} style={{ transform: 'rotateX(30deg) rotateY(20deg)' ,transformStyle: 'preserve-3d', color:'#D1D5DB', fill:'#D1D5DB'}}/></span>
                      <span id='rating'>({val.rating})</span>
                      </div>
                      <div className="product-flex">
                      <div className='shop-card-text-span'>
                      <h3 className="product-price">{val.price}</h3><del>{val.discount}</del><h3/>
                      </div>
           </div>
                 </div>
              </div>
            ))}
         </div>
        </section>
    )

}
export default Hproducts;