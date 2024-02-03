// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loder, setLoder] = useState("");

  const authStatus = useSelector((state) => state.auth.state);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
      }
      setLoder(false)
  }, [authStatus, navigate, authentication]);
}
