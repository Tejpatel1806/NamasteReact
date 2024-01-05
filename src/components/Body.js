import RestCard, { Withopencloselabel } from "./RestCard";
// import resobjdata from "../utils/mockdata";
//uper ni line ne comment karvan
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
const Body = () => {
  const [resobjdatanew, setResobjdatanew] = useState([]);
  const [filterrestaurants, setFilterrestaurants] = useState([]);
  const [searchtext, setSearchtext] = useState("");

  //ahi aapde higher order component ne ek component ma store karai didhu jenu name OpenClosecomponent che 
  const OpenClosecomponent = Withopencloselabel(RestCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data1 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsondata1 = await data1.json();
    // console.log(jsondata1);
    // console.log(
    //   jsondata1.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // );

    setResobjdatanew(
      jsondata1.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilterrestaurants(
      jsondata1.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const status = useOnlinestatus();
  if (status === "false") {
    return <h1>OOPS!Your internet connection is offline please try again</h1>;
  }
  // console.log("body is called");

  //conditional rendering
  if (resobjdatanew.length === 0) {
    return <Shimmer></Shimmer>;
  }
  return (
    <div className="body">
      <div className="filter flex  ">
        <div className="search m-4 p-4 ml-[585px]">
          <input
            type="text"
            className="border border-solid border-black py-2"
            placeholder="Search"
            value={searchtext}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          ></input>
          <button
            className="m-6 py-2 bg-green-100 w-[86px] rounded-lg"
            onClick={() => {
              const filterrestaurant = resobjdatanew.filter((item) => {
                console.log(item.info.name);
                return item.info.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase());
              });
              setFilterrestaurants(filterrestaurant);
              console.log(resobjdatanew);
            }}
          >
            Search
          </button>
        </div>

        <div className="m-4 p-4 px-120 flex items-center float-right rounded-lg">
          <button
            className="m-6 py-2 bg-green-100 w-[86px"
            onClick={() => {
              setFilterrestaurants(
                resobjdatanew.filter((res) => {
                  return res.info.avgRating > 4.2;
                })
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {/* <RestCard resdata={resobjdata[0]}></RestCard>
        <RestCard resdata={resobjdata[1]}></RestCard>
        <RestCard resdata={resobjdata[2]}></RestCard> */}
        {/* <RestCard resname="KFC" cuisine="Burger,Fast Food"></RestCard> */}

{/* have aapde ahi check karie chie ke item.info.isOpen jo true che to aapde higher order component batavie chie baki aapde normal component j batavie chie jo e false hoy to */}
        {filterrestaurants.map((item, index) => {
          return (
            <Link to={"/restaurants/" + item.info.id}>
              {item.info.isOpen ? (
                <OpenClosecomponent resdata1={item}></OpenClosecomponent>
              ) : (
                <RestCard key={index} resdata={item} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
