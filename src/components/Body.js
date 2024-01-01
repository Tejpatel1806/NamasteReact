import RestCard from "./RestCard";
// import resobjdata from "../utils/mockdata";
//uper ni line ne comment karvan
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [resobjdatanew, setResobjdatanew] = useState([]);
  const [filterrestaurants, setFilterrestaurants] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data1 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsondata1 = await data1.json();
    // console.log(jsondata1);
    // console.log(jsondata1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    setResobjdatanew(
      jsondata1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterrestaurants(
      jsondata1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //conditional rendering
  if (resobjdatanew.length === 0) {
    return <Shimmer></Shimmer>;
  }
  return (
    <div className="body">
      <div className="filter">
        <center>
          <div className="search">
            <input
              type="text"
              className="search-box"
              placeholder="Search"
              value={searchtext}
              onChange={(e) => {
                setSearchtext(e.target.value);
              }}
            ></input>
            <button
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
        </center>

        <center>
          <button
            className="toprated-btn"
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
        </center>
      </div>
      <div className="res-container">
        {/* <RestCard resdata={resobjdata[0]}></RestCard>
        <RestCard resdata={resobjdata[1]}></RestCard>
        <RestCard resdata={resobjdata[2]}></RestCard> */}
        {/* <RestCard resname="KFC" cuisine="Burger,Fast Food"></RestCard> */}

        {filterrestaurants.map((item, index) => {
          return (
            <Link to={"/restaurants/" + item.info.id}>
              <RestCard key={index} resdata={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
