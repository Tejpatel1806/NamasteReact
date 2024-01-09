import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  const [username, setUsername] = useState("Tej Patel");
  return (
    // have aapde UserContext ne import karyu uper ane .Provider aapyu matlab eni vachche je component aave che te badha ma e loggedInuser ni value Tej Patel lese
    // <UserContext.Provider value={{loggedInuser:"Tej Patel"}}>
    //   <Header></Header>
    // </UserContext.Provider>
    //   <Outlet></Outlet>
    // jo aam uper batavyu em karyu eno matlab evo thay ke e have khali Header component ma j value Tej Patel lese baki badhe te je aapde default value aapi che loggedInuserni e lese aapde UserContext.js ma default value default user aapi che etle header sivay badhe default user dekhase
    //UserContext.Provider ma value em lakhva thi te juni value ne override kari dese ane eni niche means ena thi jetla wrap thaya hase e badha ma e override value batadse baki na ma e juni means default value j batadse je pela hase e

    //aa rite aapde store che te aapvano aapdi app ne jene provider store={} e wrap karyu che e badha component che te aapda appStore ne use kari sakse 
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInuser: username, setUsername }}>
        <div className="app">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

//first of all aapde react-router-dom ne npm thi install kari laisu pachi have aapde appRouter banavsu je array of object lese ane ema aapde path ane element aapsu path ma je url aapvano hoy te aapsu ane elemnt ma e url aave to suh display thavu joie te aapsu have aapde children tarike je aapsu ema evu thay ke / pachi e url aave to e element display thase pan uper aapde outlet evu lakhyu che eno matlab evo thay ke jo / aave ane pachi children tarike about aave to outlet ni jagya e aaode children ma about path ma je element lakhyo che te aai jase
//ane error element no concept evo che ke jo e path / pachi children path ma thi koi path nai hoy to e error  Element ma je page lakhyu che e batavse
//have error.js ma joso to ek useRouteError kari ne ek batavse je hook j che ane te error related information aape che like aapde have error no code jovo hoy to err.status karvathi madse e rite
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contactus",
        element: <Contactus></Contactus>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu></RestaurantMenu>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
    errorElement: <Error></Error>,
  },
  // {
  //   path:"/about",
  //   element:<About></About>
  // },
  // {
  //    path:"/contactus",
  //    element:<Contactus></Contactus>
  // }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

//aa rite aapde Router Provider ni madad thi aapde tene render karavsu
root.render(<RouterProvider router={appRouter}></RouterProvider>);
