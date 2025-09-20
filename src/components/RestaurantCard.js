import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;
  const info = resdata;
  if (!info) {
    return null;
    // or return <div className="res-card empty">No data available</div>;
  }

  const {
    name,
    cuisines,
    deliveryTime,
    cloudinaryImageId,
    avgRating,
    costForTwo,
  } = info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} for two </h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
