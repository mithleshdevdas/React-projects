import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import  {logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div>
      <button onClick={logoutHandler} className="bg-orange-400">
        logout
      </button>
    </div>
  );
}

export default LogoutBtn;
