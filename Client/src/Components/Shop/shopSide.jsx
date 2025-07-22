import React,{useState} from 'react';
import {Link, useLocation} from 'react-router-dom';



const ShopSide =  ({className=""}) => {
  const location = useLocation();
  const links = [
    { label: "All products", path: "/shop" },
    { label: "Electronics", path: "/Electronics" },
    { label: "Clothing", path: "/Clothing" },
    { label: "Home & Living", path: "/Home-Living" },
    { label: "Accessories", path: "/Accessories" },
  ];
  


    

     

      const[number1,setNumber1] = useState(0)
      const[number2,setNumber2] = useState(500)
      const handleNumber1Change = (e) => {
           setNumber1(e.target.value);
      }
      const handleNumber2Change = (e) => {
        setNumber2(e.target.value);
      }
 

return(
       
        <> 
        <aside className={className}>
        <div className="shopSide-class">
               <div className="shop-side-container">
               <div className="search">
                 <h3>Search</h3>
                 <input type="text" placeholder="Search products..." />
              </div>
              <div className="categories">
                <h3>Categories</h3>
                  <ul>
                    {links.map((val,index)=>(
                        <li key={index}  ><Link to = {val.path} className={`link ${location.pathname === val.path ? "visitedLink" : ""}`}>{val.label}</Link></li>
                    ))}
                  </ul>
              </div>
              <div className="price-range">
                 <h3>Price Range</h3>
                  <div className="range">
                    <span className="initial">${number1}</span>
                    <span className="final">${number2}</span>
                  </div>
                  <div className="range-input">
                    <div className="input-1">
                    <span>Min Price</span>
                    <input type="number" value={number1} onChange={handleNumber1Change}/>
                    </div>
                 <div className="input-2">
                 <span>Max price</span>
                 <input type="number" value={number2} onChange={handleNumber2Change} />
                 </div>
                 </div>
              </div>
               </div>
             </div>
        </aside>
</>
    )
}
export default ShopSide;