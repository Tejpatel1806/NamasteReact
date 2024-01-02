import User from "./User";
import Userclass from "./Userclass";

const About =()=>{
return(
    <>
    <div>
        <h1>This is about Page</h1>
        <h2>this is namste react playlist</h2>
 {/* aapde function based component ma jyare props pass karie te <User ></User> ma batayu che ane class based component ma kai rite props pass karie te <Userclass></Userclass> ma batayu che ane class based component ma props ne kai rite access kari sakay te Userclass.js ma batayu che */}
        {/* <User name={"tejpatel(function)"} location={"dhansura(function)"}></User> */}
        <Userclass name={"tejpatel(class)"} location={"dhansura(class)"}></Userclass>
    </div>
    </>
);
}
export default About;