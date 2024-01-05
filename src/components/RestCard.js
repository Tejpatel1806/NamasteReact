import { CDN_URL } from "../utils/constant";

const RestCard = ({resdata}) => {

    return (
      <div className=" w-[250px] h-[500px] ml-[100px] mr-[100px] mt-[50px] mb-[50px] rounded-xl " style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="resimg"
          alt="res-logo"
          src={
            CDN_URL +
            resdata.info.cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold py-4 text-lg">{resdata.info.name}</h3>
        <h4>{resdata.info.cuisines.join(", ")}</h4>
        <h4>Price is:- {resdata.info.costForTwo }</h4>
        <h4>Rating is:- {resdata.info.avgRating} stars</h4>
        <h4>Delivery Time:-{resdata.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };
 
  export default RestCard;