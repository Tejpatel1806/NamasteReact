import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu=()=>{
    const [resMenu,setResMenu]=useState(null);
    const {resId}=useParams();
    useEffect(()=>{
           fetchMenu();
    },[]);
    const fetchMenu=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const jsondata=await data.json();
        console.log(jsondata);
        setResMenu(jsondata);
    }
    if(resMenu === null)
    {
        return <Shimmer></Shimmer>
    }
     const {name,cuisines,cloudinaryImageId,costForTwo,costForTwoMessage,avgRating
     }=resMenu?.data?.cards[0]?.card?.card?.info;
     const{itemCards}=resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
     console.log(itemCards);
    return(
        <>
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
               {itemCards.map((item)=>(
                <li>
                    {item.card.info.name} -{item.card.info.price/100 || item.card.info.defaultPrice/100}
                </li>
               ))}
            </ul>
        </div>
        </>
    );
}
export default RestaurantMenu;