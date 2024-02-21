import React, { useEffect } from "react";
import { Grid, Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { loadState } from "../lib/Storage";

const MainLayout = () => {
  const user = loadState("user");
  if (!user) return <Navigate to="/" replace/>
  return (
    <Grid sx={{ bgcolor: "#84919f", height: "100vh" }} container>
      <Grid
        p="20px"
        sx={{ bgcolor: "#0074E9", height: "100vh" }}
        item
        lg={3}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptas accusantium quaerat architecto iste cumque rerum illum perspiciatis consectetur voluptates.</p>
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
