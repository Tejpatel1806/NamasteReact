import { useState } from "react";

const User = ({name,location}) => {
    //state varible banavani rit functional component ma 
    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(1);
    return (
      <>
        <div className="user-card">
            <h1>{count}</h1>
            <h1>{count1}</h1>
          <h2>Name:{name}</h2>
          <h3>Location:-{location}</h3>
          <h3>Contact:-tejpatel1806@gmail.com</h3>
        </div>
      </>
    );
  };
  export default User;
  