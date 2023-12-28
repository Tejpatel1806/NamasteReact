import RestCard from "./RestCard";
import resobjdata from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
  const [resobjdatatoprated, setResobjdatatoprated] = useState(resobjdata);
  return (
    <div className="body">
      <div className="filter">
        <center>
          <button
            className="toprated-btn"
            onClick={() => {
              setResobjdatatoprated(
                resobjdata.filter((res) => {
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

        {resobjdatatoprated.map((item, index) => {
          return <RestCard key={index} resdata={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
