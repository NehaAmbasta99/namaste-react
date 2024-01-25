import { Link } from "react-router-dom";
const CardComponent = (props) => {
    const {data} = props;
    const {name,location,deliveryTime,imgSrc,_id} = data;
   return(
   <Link to={"/carddetail/" + _id}>
     <div className="card">
        <div className="card-header">
        </div>
        <div className="card-body">
         <img src={imgSrc} className="restaurantImage"/>
        {name}
        {location}
       
        </div>
        <div className="card-footer"> {deliveryTime}
        </div>

    </div>
    </Link>
    )
}

export default CardComponent;