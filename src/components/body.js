import CardComponent from "./cards";
import { useEffect, useState } from "react";
import ShimmerComponent from "./shimmer";
import useRestaurantInfo from "../utils/restaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
 const BodyComponent = () => {
    const [resList, setResList] = useState([]);
    const [restaurantList, setrestaurantList] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const onlineStatus = useOnlineStatus();
    useEffect(() =>{
        fetchData();
    },[])
    const fetchData = async ()=> {
        const data = await fetch(
        "http://localhost:3000/restaurants"
        );

        const json = await data.json();
        setResList(json);
        setrestaurantList(json);
    }
if(!onlineStatus){
    return (<div className="body"> <h1>You are offline!</h1></div> )
}
if(resList?.length > 0){
    return (
        <div className="p-20">
            <div className="filter">
                <input type="text" className="search-text" value={searchText} onChange={(e) => {
              setSearchText(e.target.value);
            }}/>
                <button onClick={()=> { 
                    setResList(restaurantList.filter(restaurant => restaurant.name.toLowerCase().includes(searchText.toLowerCase())))}}>Search</button>
            <button onClick={() => {
                const filteredList = resList.filter(restaurant => restaurant.rating > 4);
                setResList(filteredList);
                } }
                className="bg-orange-400 rounded-lg p-3">Top Rated Restaurants</button>
                <button onClick={() => { fetchData(); } }
                className="bg-orange-400 rounded-lg p-3">Show All Restaurants</button>
            </div>
            
            <div className="card-container">
           { resList.map((restaurant) => (
                <CardComponent key={restaurant._id} data={restaurant}></CardComponent>
            ))
            }
            </div>
        
        </div>
    )
        } else {
            return (<ShimmerComponent/>)
        }
}

export default BodyComponent;