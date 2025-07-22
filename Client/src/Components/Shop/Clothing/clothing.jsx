import ShopSide from '../shopSide';
import '../shop.css';
import ClothingCard from './clothingCard';
import Title from '../../common/Title/Title';
import { Filter, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const Electronics = () => {
    const [showFilters, setShowFilters] = useState(false);
     
       const toggleFilters = () => {
         setShowFilters(prev => !prev); 
       };
    return(
        <> 
          <section className="shop">
          <div className="container">
           <Title heading="Shop All Products" subHeading="8 products found"></Title>
           <div className="filter">
                     <button className="filter-btn" onClick={toggleFilters}>
                       <Filter className="filter-icon" />
                       <span>Filters</span>
                       <ChevronDown className={`chevron-icon ${showFilters ? 'rotated' : ''}`} />
                     </button>
                   </div>
            <div className="flex-shop">
            <ShopSide className={showFilters ?"shopSide" : "category-bar"}/>
            <ClothingCard/>
            </div>
          </div>
             </section>
        </>
      )
}
export default Electronics;


