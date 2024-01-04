import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Header = () => {
  const[buttonname,setButtonname]=useState("Login");
  const status=useOnlinestatus();
    return (
      <div className="flex justify-between">
        <div className="logo-container">
          <img
            className="w-[70px]"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul className="flex p-4 m-4">
            <li>Online Status:- {status==="true" ? "🟢": "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li>Cart</li>
            <button style={{padding:"0px 22px",cursor:"pointer","margin-right":"15px"}} onClick={()=>{
              if(buttonname==="Logout"){setButtonname("Login");}
             else{ setButtonname("Logout");}
            }}>{buttonname}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;