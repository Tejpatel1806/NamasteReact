import { CDN_URL } from "../utils/constant";

const RestCard = ({resdata}) => {

    return (
      <div className=" w-[250px] h-[600px]  mr-[100px] mt-[50px] mb-[50px] rounded-xl " style={{ backgroundColor: "#f0f0f0" }}>
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

  //Higher order component
  //takes a input as a RestCard and return a new component ke jeni andar RestCard j hase pan ema open che ke close restaurant enu label lagyu hase
 
  // aa higher order component che je as a input tarike RestCard le che ane ek component return kare che to return ma pan aapde ek arrow function mokalsu karan ke component che tema aapde arrow function j aapta hoie che je some JSX return kare che  
  //ane aa higher order component ne aapde named export thi export kari daisu
  
  const Withopencloselabel =(RestCard)=>{
     return ({resdata1})=>{
      return (
        <>
           <div >
            <label className="absolute bg-black text-white rounded-lg">Open</label>
            <RestCard resdata={resdata1}></RestCard>
           </div>
        </>
      );
     }
  }
 
  export default RestCard;
  export {Withopencloselabel};