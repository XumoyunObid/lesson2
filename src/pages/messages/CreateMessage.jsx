import { Stack } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import Card from "../../Components/Card";
import Form from "../../Components/Form";
import LogOutBtn from "../../Components/LogOutBtn";

const CreateMessage = () => {
  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" mb="20px">
          Create Message
        </Typography>
        <LogOutBtn/>
      </Stack>
      <Form />
    </Stack>
  );
};

export default CreateMessage;
