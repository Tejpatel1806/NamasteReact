import { CDN_URL } from "../utils/constant";

const RestCard = ({resdata}) => {

    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="resimg"
          alt="res-logo"
          src={
            CDN_URL +
            resdata.info.cloudinaryImageId
          }
        ></img>
        <h3>{resdata.info.name}</h3>
        <h4>{resdata.info.cuisines.join(", ")}</h4>
        <h4>Price is:- {resdata.info.costForTwo }</h4>
        <h4>Rating is:- {resdata.info.avgRating} stars</h4>
        <h4>Delivery Time:-{resdata.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };
 
  export default RestCard;