import { useEffect, useState } from "react";
import restrautList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  console.log("body rendered");

  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0212805&lng=80.2231037&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   "data>>",
    //   json.data.cards[1].card.card.gridElements?.infoWithStyle?.restaurants[0]
    //     .info
    // );
    setList(
      json.data.cards[1].card.card.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json.data.cards[1].card.card.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <div>
        <h3> Looks Like you're offline</h3>
      </div>
    );
  if (list.length === 0) {
    return <Shimmer />;
  }
  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchbox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const searchResult = list.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredList(searchResult);
            }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = list.filter((res) => res.info.avgRating > 4);
            console.log({ filteredList });

            setList(filteredList);
          }}>
          Top rated
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => {
          console.log(restaurant.info?.id);

          return (
            <Link
              key={restaurant.info?.id}
              to={"restaurants/" + restaurant.info?.id}>
              <RestaurantCard
                // ✅ name + index as fallback
                resdata={restaurant.info}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
