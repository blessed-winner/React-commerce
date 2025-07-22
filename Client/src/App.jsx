import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Header from './Components/header/header';
import Home from './Components/home/Home';
import Shop from './Components/Shop/Shop';
import Electronics from './Components/Shop/Electronics/Electronics';
import Clothing from './Components/Shop/Clothing/clothing';
import HomeLive from './Components/Shop/Home & Living/HomeLive';
import Accessories from './Components/Shop/Accessories/Accessories';
import Footer from './Components/Footer/footer';
import Categories from './Components/Categories/categories';
import About from './Components/About/about';
import Product from './Components/product/product';
import Login from './Components/User-auth/login';
import Signup from './Components/User-auth/signup';

const AppLayout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/signup";
return(
<>
        {!hideHeaderFooter && <Header />}
      <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/shop" element={<Shop/>}></Route>
           <Route path="/Electronics" element={<Electronics/>}></Route>
           <Route path="/Clothing" element={<Clothing/>}></Route>
           <Route path="/Home-Living" element={<HomeLive/>}></Route>
           <Route path="/Accessories" element={<Accessories/>}></Route>
           <Route path="/categories" element={<Categories/>}></Route>
           <Route path="/about" element={<About/>}></Route>
           <Route path="/product/:id" element={<Product/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
        {!hideHeaderFooter && <Footer />}

</>
 )
}

const App = () => {
  return(
      <Router>
    <AppLayout/>
  </Router>
  )
}
export default App;
