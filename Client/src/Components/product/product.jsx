import { useParams, Link, useLocation } from 'react-router-dom';
import { products } from '../../../dummydata';
import { Star, Check, ShoppingCart, Heart } from 'lucide-react';
import './product.css';
import { useState, useEffect } from 'react';

const Product = () => {
  const links = [
    { label: "All products", path: "/shop" },
    { label: "Electronics", path: "/Electronics" },
    { label: "Clothing", path: "/Clothing" },
    { label: "Home & Living", path: "/Home-Living" },
    { label: "Accessories", path: "/Accessories" },
  ];

  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [value, setValue] = useState(1);

  useEffect(() => {
    const found = products.find((p) => p.id === parseInt(id));
    setProduct(found);
    if (found) {
      setImages([found.cover, found.cover2]);
    }
    setActiveIndex(0);
  }, [id]);

  const related = product
    ? products.filter((p) => p.category === product.category && p.id !== product.id)
    : [];

  const handleValueUpdate = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      setValue(newValue);
    } else {
      setValue("");
    }
  };

  const handleMinusUpdate = () => {
    setValue((value) => Math.max(value - 1, 1));
  };

  const handlePlusUpdate = () => {
    setValue((value) => value + 1);
  };


  if (!product) return <div>Product not found</div>;

  return (
    <>
      <section className="product">
         <div className="product-container">
    <div className="product-grid grid">
          <div className="img">
            <div className="upper-img-div">
              <img src={images[activeIndex]} alt="" />
            </div>
            <div className="lower-img-div">
              {images.map((val, i) => (
                <div className="img" key={i}>
                  <img
                    src={val}
                    alt=""
                    className={activeIndex === i ? 'active-thumb' : ''}
                    onClick={() => setActiveIndex(i)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="product-text">
            <div className="text-content">
              <h1>{product.name}</h1>
              <span className="product-span">
                <Star style={{ color: 'gold', fill: 'gold' }} />
                <Star style={{ color: 'gold', fill: 'gold' }} />
                <Star style={{ color: 'gold', fill: 'gold' }} />
                <Star style={{ color: 'gold', fill: 'gold' }} />
                <Star style={{ color: '#D1D5DB', fill: '#D1D5DB' }} />
                <span>{product.rating} ({product.review} reviews)</span>
              </span>
              <div className="price">
                <h3>{product.price}</h3><del>{product.discount}</del>
                <span>{product.new}</span>
              </div>

              <p>{product.desc}</p>
              <span id="checked"><Check size={18} color="#059669" /><span>In Stock</span></span>
            </div>
            <div className="product-adj">
              <div className="product-adj-input">
                <button className="minus" onClick={handleMinusUpdate}>-</button>
                <input type="number" value={value} onChange={handleValueUpdate} />
                <button className="plus" onClick={handlePlusUpdate}>+</button>
              </div>
              <div className="btn">
                <a href="" className="primary-btn"><ShoppingCart className="shop-btn" size={20} />Add To Cart</a>
                <button className="fav-btn"><Heart size={20} color="#4B5563" /></button>
              </div>
            </div>
            <p className="save"><Link>Login</Link> to save items to your wishlist</p>
            <div className="category">
              <span className="category-span">Category:</span>
              {links.map((val) => {
                if (val.label === product.category) {
                  return (
                    <span key={val.path}><Link to={val.path}>{val.label}</Link></span>
                  );
                }
              })}
            </div>
          </div>
        </div>

        <div className="related">
          <h1>Related Products</h1>
          <div className="related-products grid2">
            {related.map((rel, index) => (
              <div className="item" key={rel.id}>
                <div className="img">
                  <div className="featured">
                    <div className={rel.new ? 'new-span' : 'no-styles'}>{rel.new}</div>
                    <div className={rel.feature ? 'feature-span' : 'no-styles'}>{rel.feature}</div>
                  </div>
                  <Link to={`/product/${rel.id}`}>
                    <img src={rel.cover} alt="" />
                  </Link>
                </div>
                <div className="shop-card-text">
                  <h3 className="name">{rel.name}</h3>
                  <div className="rate">
                    <span><Star size={18} style={{ transform: 'rotateX(30deg) rotateY(20deg)', transformStyle: 'preserve-3d', color: 'gold', fill: 'gold' }} /></span>
                    <span><Star size={18} style={{ transform: 'rotateX(30deg) rotateY(20deg)', transformStyle: 'preserve-3d', color: 'gold', fill: 'gold' }} /></span>
                    <span><Star size={18} style={{ transform: 'rotateX(30deg) rotateY(20deg)', transformStyle: 'preserve-3d', color: 'gold', fill: 'gold' }} /></span>
                    <span><Star size={18} style={{ transform: 'rotateX(30deg) rotateY(20deg)', transformStyle: 'preserve-3d', color: 'gold', fill: 'gold' }} /></span>
                    <span><Star size={18} style={{ transform: 'rotateX(30deg) rotateY(20deg)', transformStyle: 'preserve-3d', color: '#D1D5DB', fill: '#D1D5DB' }} /></span>
                    <span id='rating'>({rel.review})</span>
                  </div>
                  <div className="product-flex">
                    <div className='shop-card-text-span'>
                      <h3 className="product-price">{rel.price}</h3><del>{rel.discount}</del>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
         </div>
       </section>
    </>
  );
};

export default Product;
