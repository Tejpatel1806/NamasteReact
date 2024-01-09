import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const[buttonname,setButtonname]=useState("Login");
  //have aa data ma UserContext no data aavi jase means te ek object che te aama aavi jase 
  const data=useContext(UserContext);
  // console.log(data);
  // output console.log(data) nu {loggedInuser:"default user"} aavu aavse ene aapde destructuring pan kari sakie like niche mujab
  const {loggedInuser}=data;
  const status=useOnlinestatus();

  //subscribing to the cartslice using selector
  //ahi aapde je data ne subscribe karvo hoy teno j path lakhvano 
  const cartItems=useSelector((store)=>store.cart.items);
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img
            className="w-[70px]"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status:- {status==="true" ? "🟢": "🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About us</Link></li>
            <li className="px-4"><Link to="/contactus">Contact Us</Link></li>
            <li className="px-4"><Link to="/cart">Cart-({cartItems.length})</Link></li>
            <button style={{padding:"0px 22px",cursor:"pointer","margin-right":"15px"}} onClick={()=>{
              if(buttonname==="Logout"){setButtonname("Login");}
             else{ setButtonname("Logout");}
            }}>{buttonname}</button>
            {/* ane aa niche batavya mujab aapde context na data ne use kari sakie chie */}
            <li>{loggedInuser}</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;