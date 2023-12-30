import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const[buttonname,setButtonname]=useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
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