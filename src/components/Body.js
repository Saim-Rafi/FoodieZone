import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockData";


const Body = () => {
    // let ListofRestaurants2=[

    //     {
    //         data:{
    //             id: '121603',
    //             name: 'Kannur Food Point',
    //             cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
    //             cuisines: ['Kerala', 'Chinese'],
    //             maxDeliveryTime: 24,
    //             avgRating: '3.9'
    //         }
    //     },
    //     {
    //         data:{
    //             id: '121604',
    //             name: 'Meghna Food',
    //             cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
    //             cuisines: ['Kerala', 'Chinese'],
    //             maxDeliveryTime: 38,
    //             avgRating: '4.2'
    //         }
    
    //     }
    // ];
 
    const [ListofRestaurants,setListofRestaurants]=useState(resList);

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList=ListofRestaurants.filter(
                (res)=>res.data.avgRating>4
            );
            setListofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {ListofRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
