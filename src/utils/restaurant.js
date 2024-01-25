import { useEffect, useState } from "react";
const useRestaurantInfo = (restId) =>{
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    // restId = null;
    useEffect(() =>{
        fetchRestaurant();
       },[]);

       const fetchRestaurant = async() =>{
        const data = await fetch(
            restId?.cardId ? "http://localhost:3000/restaurants/"+restId?.cardId : "http://localhost:3000/restaurants"
        );     
        const json = await data.json();
    
        setRestaurantInfo(json);
        }

        return restaurantInfo;
}

export default useRestaurantInfo;