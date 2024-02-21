import React, { useEffect } from "react";
import { Grid, Stack } from "@mui/material";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../lib/Storage";

const MainLayout = () => {
  const user = loadState("user");
  if (!user) return <Navigate to="/" replace />;
  return (
    <Grid sx={{ bgcolor: "#84919f", height: "100vh" }} container>
      <Grid p="20px" sx={{ bgcolor: "#0074E9", height: "100vh" }} item lg={3}>
        <Stack>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "24px",
              color: "black",
              padding: "10px",
              border: "1px solid white",
              borderRadius: "15px",
              backgroundColor: "white",
              marginBottom: "15px",
            }}
            to="/app"
          >
            Message List
          </Link>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "24px",
              color: "black",
              padding: "10px",
              border: "1px solid white",
              borderRadius: "15px",
              backgroundColor: "white",
              marginBottom: "15px",
            }}
            to="edit"
          >
            Edit Messages
          </Link>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "24px",
              color: "black",
              padding: "10px",
              border: "1px solid white",
              borderRadius: "15px",
              backgroundColor: "white",
            }}
            to="create"
          >
            Create Messages
          </Link>
        </Stack>
      </Grid>
      <Grid item lg={9} p="20px">
        <Stack
          p={"20px"}
          borderRadius="10px"
          m={"20x"}
          bgcolor="#fff"
          height="90%"
        >
          <Outlet />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
