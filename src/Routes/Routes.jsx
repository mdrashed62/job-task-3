import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home";
import AboutMe from "../Pages/AboutMe";
import Experience from "../Pages/Experience";
import Recommended from "../Pages/Recommended";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path: "/aboutMe",
            element: <AboutMe/>
        },
        {
            path: "/experience",
            element: <Experience/>
        },
        {
            path: "/recommended",
            element: <Recommended/>
        }
      ]
    },
  ]);