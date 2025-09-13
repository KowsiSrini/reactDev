import { useState } from "react";
import restrautList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [list, setList] = useState(restrautList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = list.filter((res) => res.data.avgRating > 3);
            console.log({ filteredList });

            setList(filteredList);
          }}>
          Top rated
        </button>
      </div>
      <div className="res-container">
        {list.map((restaurant) => (
          <RestaurantCard key={restaurant.data.uuid} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
