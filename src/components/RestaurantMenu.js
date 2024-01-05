import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
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
    console.log(jsondata);
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
  console.log(itemCards);
  return (
    <>
      <div className=" ml-16 mt-8 w-[70%]  border border-black">
        <h1 className="font-bold py-4 text-lg">{name}</h1>
        <h3 className="pt-4 text-lg">{cuisines.join(",")}</h3>
        <h3 className="text-lg pb-2">{costForTwoMessage}</h3>
        <ul>
          {itemCards.map((item) => (
            <div className="flex mt-12 mb-12 ml-4 border border-blue-400 ">
              
                <div>
                  {item.card.info.name} -
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </div>
                <div className="float-right">
                  <img
                    className="w-[100px] "
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                      item.card.info.imageId
                    }
                  />
                </div>
              </div>
            
          ))}
        </ul>
      </div>
    </>
  );
};
export default RestaurantMenu;
