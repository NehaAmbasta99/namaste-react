import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/restaurant";
const CardDetailComponent = () => {
        const restId = useParams();
        const restaurantDetail = useRestaurantInfo(restId);
    
 return (
    <div className="banner" key={restId}>
        <div>
        <h1>Welcome to our Restaurant <span className="restaurant-name">{restaurantDetail?.name}</span></h1> 
       <h2>Enjoy the amazing food that we offer!!</h2>
       <button className="btn btn-primary">Order from our Menu</button>
       <div>
        <h3>Our cuisines :</h3>
        <div className="cuisines-container">{restaurantDetail?.cuisines?.map( cuisine => <button className="round-buttons"> {cuisine}</button>)}</div>
       </div>
       
       
        </div>
       <div className="banner-image">
        <img src={restaurantDetail ? restaurantDetail.imgSrc:''} />
       </div>
    </div>
 );
}

export default CardDetailComponent;