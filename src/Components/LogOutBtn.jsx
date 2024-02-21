import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LogOutBtn = () => {
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <Button type="button" variant="contained" onClick={handleLogOut}>
      Log Out
    </Button>
  );
};

export default LogOutBtn;
