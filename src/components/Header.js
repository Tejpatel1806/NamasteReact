import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Header = () => {
  const[buttonname,setButtonname]=useState("Login");
  const status=useOnlinestatus();
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
            <li className="px-4">Cart</li>
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