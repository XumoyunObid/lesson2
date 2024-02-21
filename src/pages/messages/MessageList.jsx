import { Card, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { request } from "../../config/request";

const MessageList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    request.get("/messages").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <Stack>
      <Typography variant="h4">Message List</Typography>
      {data.map((obj) => (
        <Card key={obj.id} {...obj}/>
      ))}
    </Stack>
  );
};

export default MessageList;
