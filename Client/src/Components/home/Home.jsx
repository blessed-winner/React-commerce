import './home.css';
import Hero from '../hero/hero';
import HShop from './HShop';
import Hproducts from './Hproducts';
import Hcategory from './Hcategory';
import Hnewsletter from './hnewsletter';


const Home = () => {
     return(
        <>
           <Hero/>
           <HShop/>
           <Hproducts/>
           <Hcategory/>
           <Hnewsletter/>
        </>
     )
}
export default Home;