import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";
const useRestaurantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${MENU_URL}${resid}`);
    const json = await data.json();
    console.log("json", json);

    setResInfo(json);
    console.log("resinfo", resInfo);

    // console.log(
    //   resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    //     .categories[0].itemCards
    // );
  };
  return resInfo;
};

export default useRestaurantMenu;
