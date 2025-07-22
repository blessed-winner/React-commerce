import ShopSide from '../shopSide';
import '../shop.css';
import HomeLiveCard from './HomeLiveCard';
import Title from '../../common/Title/Title';
import { Filter, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const HomeLive = () => {
 
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
            <ChevronUp className={`chevron-icon ${showFilters ? 'rotated' : ''}`} />
          </button>
        </div>
            <div className="flex-shop">
            <ShopSide className={showFilters ?"shopSide" : "category-bar"}/>
            <HomeLiveCard/>
            </div>
          </div>
             </section>
        </>
      )
}
export default HomeLive;