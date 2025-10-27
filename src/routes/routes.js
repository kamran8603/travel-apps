import { Children } from "react";
import Approuter from "../Navbar/Approuter";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home"

export const routes = [
   {
    path:"/",
    element:<Approuter/>,
    errorElement:<ErrorPage/>,
    Children:[
        {
            index:true,
            element:<Home />,
        },
        {
        path:"travelguide",
        element:<TravelGuide/>,
        },
        {
             path:"explore",
             element:<Explore />
        },
        {
            path:"experinces",
            element:<Experinces/>
        },
        {
          path:"blog",
          element:<Blog/>
        },
        {
            path:"aboutindia",
            element:<AboutIndia/>
        }
    ]
   }
]