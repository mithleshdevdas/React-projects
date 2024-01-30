
import React, { useState } from "react";
import Counter from "./counterapp/Counter";
import Cards from "./cards/Cards";
import Bgchanger from "./bgchanger/Bgchanger";
import PasswordGenter from "./passwordgenter/PasswordGenter";
import Final from "./currencyconver/Final";
import Try from "./React-Router-dom/Try";

import Bgchager from "./try/Bgchager";
import Card from "./try/Card";
import Conter from "./try/Conter";
import Passgen from "./try/Passgen";
import Layout from "./try/Layout";
import UserContextProvider from "./context-api/UserContextProvider";
import Login from "./context-api/Login";
import Profile from "./context-api/Profile";
import ContextSetup from "./context-api/ContextSetup";
import Setup from "./Themeswicher/Setup";
import SetupTodo from "./Todo/SetupTodo";

import AddTodo from './todoo/Addtodo';

import { Provider } from "react-redux";

import Todos from './todoo/Todos';

import Todoss from "./tototo/Todoss";
import Add from "./tototo/Add";
import {store} from './tototo/store'




function App() {
  return (
 <Provider store={store}>
      <Add/>
      <Todoss/>
 </Provider>
  

  )
}

export default App






