import { Headphones, ShieldCheck, RefreshCw, Truck } from 'lucide-react';
import {hshop} from '../../../dummydata';


const HShop = () => {

    const iconMap = {
        Truck,
        RefreshCw,
        ShieldCheck,
        Headphones
    }
    
   return(
        <section className="hshop">
            <div className="heading">
                <h1>Why Shop With Us</h1>
                <p>We strive to provide the best shopping experience with these benefits</p>
            </div>
            <div className="hshop-card grid2">
                 {hshop.map((val,index) =>{
                      const IconComponent = iconMap[val.icon];
                      return(
                        <div className="hhshop-icon" key={index}>
                        <IconComponent className="hshop-icon"/>
                        <div className="icon-text">
                            <h4>{val.title}</h4>
                            <p>{val.desc}</p>
                        </div>
                    </div>
                      )
                 } 
                )}
            </div>
        </section>
    )

}
export default HShop;