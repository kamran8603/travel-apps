import Approuter from "../Navbar/Approuter.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Home from "../pages/Home/Home.jsx";
import TravelGuide from "../pages/TravelGuide/TravelGuide.jsx";
import Explore from "../pages/Explore/Explore.jsx";
import Experinces from "../pages/Experinces/Experinces.jsx";
import Blog from "../pages/Blog/Blog.jsx";
import AboutIndia from "../pages/AboutIndia/AboutIndia.jsx";


export const routes = [
  {
    path: "/",
    element: <Approuter />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "travelguide",
        element: <TravelGuide />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "experinces",
        element: <Experinces />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "aboutindia",
        element: <AboutIndia />,
      },
    ],
  },
];
