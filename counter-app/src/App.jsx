
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

import AddTodo from "./Redux-tookit/AddTodo";

import { Provider } from "react-redux";
import { store } from "./Redux-tookit/store";
import Todos from "./Redux-tookit/Todos";





function App() {
  return (
 <Provider store={store}>
      <AddTodo />
      <Todos/>
 </Provider>
  

  )
}

export default App






