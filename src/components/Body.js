import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockData";

const Body = () => {
  
  const [ListofRestaurants, setListofRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83645&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();

    console.log(json);

    setListofRestaurants(json?.data?.cards[2].card.card) ;
  };

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListofRestaurants.filter(
              (res) => res.data.avgRating > 4
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
