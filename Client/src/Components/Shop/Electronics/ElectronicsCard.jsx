import {Menu, Star} from 'lucide-react';
import{Grid} from 'lucide-react';
import {useState,useRef, useEffect} from 'react';
import {products} from '../../../../dummydata';
import { ShoppingCart } from 'lucide-react';
import {Heart} from 'lucide-react';




const ElectronicsCard = () => {

   const icons = [
    {href:"", id:"right-div-link" ,icon:<Grid className="right-div-icon menu-icon" size={20}/>},
    {href:"", id:"right-div-link", icon:<Menu  className="right-div-icon grid-icon" size={20}/>}
    
   ]
   const [visitedIndex,setVisitedIndex]=useState(0);
   const handleVisitedIndex = (index) => {
    setVisitedIndex(index)
   }
   const selectedIds = [1,2,4];
   const[sortOption,setSortOption] = useState('Featured');

   const getPrice = (item) => parseFloat(item.replace('$',''));

   const selectedItems =[...products].sort((a,b)=>{
      switch(sortOption){
         case 'Price:Low to High':
          return getPrice(a.price) - getPrice(b.price);
          case 'Price:High to Low':
            return getPrice(b.price) - getPrice(a.price);
            case 'Rating':
               return parseFloat(b.rating) - parseFloat(a.rating);
               case 'Newest':
                  return new Date(b.date) - new Date(a.date);
                  default:
                     return 0;
      }
   })
      return(
    <div className="shop-card-container">
      <div className="shop-card-head">
          <div className="dropdown">
            <label htmlFor="">Sort By:</label>
             <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
             <option value="Featured">Featured</option>
             <option value="Price:Low to High">Price:Low to High</option>
             <option value="Price:High to Low">Price:High to Low</option>
             <option value="Rating">Rating</option>
             <option value="Newest">Newest</option>
             </select>
          </div>
          <div className="right-div">
              {icons.map((item,index) => (
                    <a key={index} href={item.href} onClick ={()=>handleVisitedIndex(index)} className={visitedIndex === index ? "right-div-focus" : "right-div-icon"}>{item.icon}</a>
              )
               )}
                 </div>
         </div>
         <div className="shop-cards grid3">
             {selectedItems.filter((val)=>selectedIds.includes(val.id)).map((val)=>(
              <div className="item ">
                  <div className="img">
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
                   <h3 className="product-price">{val.price}</h3>
                  </div>
              </div>
            ))}
         </div>
 </div>
  )

}
export default ElectronicsCard;