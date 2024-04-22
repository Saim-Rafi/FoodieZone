import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, maxDeliveryTime } =
    resData?.data;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt="res-img" id="res-img" />
      <h4 id="heading">{name}</h4>
      <p>{cuisines.join(",")}</p>
      <p>{avgRating} stars</p>
      <p>{maxDeliveryTime} minutes</p>
    </div>
  );
};

export default RestaurantCard;
