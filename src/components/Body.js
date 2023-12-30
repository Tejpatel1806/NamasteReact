import RestCard from "./RestCard";
// import resobjdata from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [resobjdatanew, setResobjdatanew] = useState([]);
  const[filterrestaurants,setFilterrestaurants]=useState([]);
  const [searchtext,setSearchtext]=useState("");
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://mocki.io/v1/6d35a163-9d16-43a5-b3e2-f99da4553d1c"
    );
    const jsondata = await data.json();
    // console.log(jsondata);
    setResobjdatanew(jsondata?.data);
    setFilterrestaurants(jsondata?.data);
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
          <input type="text" className="search-box" placeholder="Search" value={searchtext} onChange={(e)=>{
            setSearchtext(e.target.value);
          }}></input>
          <button onClick={()=>{
            const filterrestaurant=resobjdatanew.filter((item)=>{
              console.log(item.info.name);
              return item.info.name.toLowerCase().includes(searchtext.toLowerCase());
            })
            setFilterrestaurants(filterrestaurant);
            console.log(resobjdatanew);
          }}>Search</button>
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
          return <RestCard key={index} resdata={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
