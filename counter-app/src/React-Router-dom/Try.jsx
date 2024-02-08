import React from "react";
import {

  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from './Layout';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Github from "./Github";
import User from "./User";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} />
      <Route path="user/:id" element={<User />} />
    </Route>
  )
);





function Try() {
  return (
    <>
      
<RouterProvider router={ router } />;
   </>
  )
}

export default Try


//

//

