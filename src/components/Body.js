import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockData";


const Body= () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((restaurant)=>(
                    <RestaurantCard resData={restaurant} key={restaurant.data.id}/>
                ))}

            
            </div>
        </div>
    );
};

export default Body;