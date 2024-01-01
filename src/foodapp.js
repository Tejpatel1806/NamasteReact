import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
    </div>
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
        element:<RestaurantMenu></RestaurantMenu>,
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
