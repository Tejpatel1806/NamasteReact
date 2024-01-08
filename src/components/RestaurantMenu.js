import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const [showindex,setShowindex]=useState(0);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsondata = await data.json();
    // console.log(jsondata);
    setResMenu(jsondata);
  };

  //ahi aapde useRestaurantMenu ma thi data lavsu
  //const resInfo=useRestaurantMenu(resId);
  if (resMenu === null) {
    return <Shimmer></Shimmer>;
  }
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    costForTwoMessage,
    avgRating,
  } = resMenu?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  // console.log( resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories= resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>
    item?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories);
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(",")}</p>

        {/* //categories accordians */}
       { categories.map((item,index) => {
            return  <RestaurantCategory data={item?.card?.card} setShowindex={()=>setShowindex(index)} showitem={index===showindex && true}></RestaurantCategory>;
       })}
       
      </div>
    </>
  );
};
export default RestaurantMenu;
