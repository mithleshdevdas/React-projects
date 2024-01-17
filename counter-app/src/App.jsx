
import React, { useState } from "react";
import Counter from "./counterapp/Counter";
import Cards from "./cards/Cards";
import Bgchanger from "./bgchanger/Bgchanger";
import PasswordGenter from "./passwordgenter/PasswordGenter";
import Final from "./currencyconver/Final";
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./React-Router-dom/Layout";
import Home from "./React-Router-dom/Home";
import About from "./React-Router-dom/About";
import Contact from "./React-Router-dom/Contact";
import Github from "./React-Router-dom/Github";
import User from "./React-Router-dom/User";



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


function App() {
  return (
    <>
 
<RouterProvider router={router} />
  

</>
  )
}

export default App






