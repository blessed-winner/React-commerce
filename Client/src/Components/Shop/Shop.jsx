import React, { useState } from 'react';
import ShopCard from './ShopCard';
import './shop.css';
import ShopSide from './shopSide';
import Title from '../common/Title/Title';
import { Filter, ChevronDown } from 'lucide-react';

const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(prev => !prev); 
  };


  return (
    <section className="shop">
      <div className="container">
        <Title heading="Shop All Products" subHeading="8 products found" />
        
        <div className="filter">
          <button className="filter-btn" onClick={toggleFilters}>
            <Filter className="filter-icon" />
            <span>Filters</span>
            <ChevronDown className={`chevron-icon ${showFilters ? 'rotated' : ''}`} />
          </button>
        </div>

        <div className="flex-shop">
          <ShopSide className={showFilters ?"category-bar" : "shopSide"}/>
          <ShopCard />
        </div>
      </div>
    </section>
  );
};

export default Shop;
