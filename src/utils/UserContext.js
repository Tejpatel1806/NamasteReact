import { createContext } from "react";

//aa rite apde context banavyo ke jema data che aama as a data tarike object che ane ema key loggedInuser che ane eni value default user che 
const UserContext=createContext({
    loggedInuser:"default user",
});
export default UserContext;