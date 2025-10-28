import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes/routes.jsx"; // ensure correct path & extension

function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
