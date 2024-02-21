import { Stack } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import Card from "../../Components/Card";
import Form from "../../Components/Form";

const CreateMessage = () => {
  return (
    <Stack>
      <Typography variant="h4" mb="20px">
        Create Message
      </Typography>
      <Form />
    </Stack>
  );
};

export default CreateMessage;
