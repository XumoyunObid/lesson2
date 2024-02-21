import { Stack, Typography } from "@mui/material";
import React from "react";

const Card = ({ id, name }) => {
  return (
    <Stack>
      <Typography variant="h5">{name}</Typography>
    </Stack>
  );
};

export default Card;
