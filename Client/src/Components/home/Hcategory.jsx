import {category} from '../../../dummydata';
const Hcategory = () => {
  return(
    <section className="hcategory">
        <div className="heading">
            <h1>Shop By Category</h1>
        </div>
        <div className="hcategory-container grid2">
            {category.map((val)=>(
                <div className="img">
                    <img src={val.cover} alt="" />
                    <div className="hcat-text">
                    <h4>{val.name}</h4>
                    <span>Explore collection</span>
                    </div>
                    </div>
            ))}
        </div>
    </section>
  )
}
export default Hcategory;
