import {Home} from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import './last.css';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Categories = () => {

    const navigate = useNavigate();

    return(
        <section className="category-container padding">
        <div className="container">
            <div className="not-found">
            <h1>404</h1>
         <h2>Page not found</h2>
        <span className="categories-span"> The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</span>
         <div className="btn">
                           <Link to = "/"className="primary-btn"><Home className="shop-btn" size={20}/>Go Home</Link>
                           <button onClick={()=>navigate(-1)} className="secondary-btn"><ArrowLeft className="shop-btn" size={18}/>Go Back</button> 
                       </div>
            </div>
        </div>
        </section>
      )
}
export default Categories;